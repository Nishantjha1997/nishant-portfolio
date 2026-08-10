"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

const SAMPLE_TEXT = "Good systems create clarity. They help people make the next decision with confidence, and they leave the work easier to understand than they found it.";

type SpeechStatus = "idle" | "speaking" | "paused";

const subscribeToSpeechSupport = () => () => undefined;
const getSpeechSupport = () => typeof window !== "undefined" && "speechSynthesis" in window;
const getServerSpeechSupport = () => false;

export function SpeechLab() {
  const [text, setText] = useState(SAMPLE_TEXT);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceUri, setVoiceUri] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [status, setStatus] = useState<SpeechStatus>("idle");
  const [error, setError] = useState("");
  const supported = useSyncExternalStore(subscribeToSpeechSupport, getSpeechSupport, getServerSpeechSupport);

  const selectedVoice = useMemo(
    () => voices.find((voice) => voice.voiceURI === voiceUri) ?? voices[0],
    [voiceUri, voices],
  );

  useEffect(() => {
    if (!supported) return;
    const loadVoices = () => {
      const available = [...window.speechSynthesis.getVoices()].sort((a, b) => {
        if (a.default !== b.default) return a.default ? -1 : 1;
        return a.lang.localeCompare(b.lang) || a.name.localeCompare(b.name);
      });
      setVoices(available);
      setVoiceUri((current) => current || available[0]?.voiceURI || "");
    };
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const speak = () => {
    if (!supported) {
      setError("This browser does not provide the Web Speech API. Try a current version of Chrome, Edge, or Safari.");
      return;
    }
    const cleanText = text.trim();
    if (!cleanText) {
      setError("Add some text before starting playback.");
      return;
    }
    setError("");
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText.slice(0, 5_000));
    utterance.voice = selectedVoice ?? null;
    utterance.lang = selectedVoice?.lang || "en-US";
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.onstart = () => setStatus("speaking");
    utterance.onend = () => setStatus("idle");
    utterance.onerror = (event) => {
      if (event.error !== "canceled" && event.error !== "interrupted") {
        setError("Speech playback could not start with this voice. Try another installed voice.");
      }
      setStatus("idle");
    };
    window.speechSynthesis.speak(utterance);
  };

  const togglePause = () => {
    if (!supported || status === "idle") return;
    if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("speaking");
    } else {
      window.speechSynthesis.pause();
      setStatus("paused");
    }
  };

  const stop = () => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setStatus("idle");
  };

  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "nishant-tts-script.txt";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
  };

  return (
    <div className="speech-workspace">
      <div className="speech-editor">
        <label htmlFor="speech-text">Text to speak</label>
        <textarea id="speech-text" value={text} onChange={(event) => setText(event.target.value)} maxLength={5_000} rows={9} />
        <div className="field-meta"><span>{text.length.toLocaleString()} / 5,000 characters</span><span>Processed on this device</span></div>
      </div>

      <div className="speech-settings">
        <label htmlFor="speech-voice">Installed voice</label>
        <select id="speech-voice" value={voiceUri} onChange={(event) => setVoiceUri(event.target.value)} disabled={!supported || voices.length === 0}>
          {voices.length ? voices.map((voice) => <option value={voice.voiceURI} key={voice.voiceURI}>{voice.name} · {voice.lang}{voice.default ? " · default" : ""}</option>) : <option>Waiting for browser voices…</option>}
        </select>

        <div className="range-grid">
          <label htmlFor="speech-rate"><span>Speed</span><strong>{rate.toFixed(1)}×</strong><input id="speech-rate" type="range" min="0.6" max="1.6" step="0.1" value={rate} onChange={(event) => setRate(Number(event.target.value))} /></label>
          <label htmlFor="speech-pitch"><span>Pitch</span><strong>{pitch.toFixed(1)}</strong><input id="speech-pitch" type="range" min="0.5" max="1.5" step="0.1" value={pitch} onChange={(event) => setPitch(Number(event.target.value))} /></label>
        </div>

        <div className="speech-actions">
          <button className="button button-primary" type="button" onClick={speak}>{status === "speaking" ? "Restart" : "Play speech"} <span aria-hidden="true">▶</span></button>
          <button className="button button-quiet" type="button" onClick={togglePause} disabled={status === "idle"}>{status === "paused" ? "Resume" : "Pause"}</button>
          <button className="button button-quiet" type="button" onClick={stop} disabled={status === "idle"}>Stop</button>
          <button className="button button-quiet" type="button" onClick={downloadText}>Download text</button>
        </div>

        <p className="speech-status" role="status" aria-live="polite">Status: {status === "idle" ? "ready" : status}</p>
        {error ? <p className="form-error" role="alert">{error}</p> : null}
      </div>
    </div>
  );
}
