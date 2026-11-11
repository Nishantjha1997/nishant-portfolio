import Link from "next/link";

/*
 * Homepage "bot army" band: an org chart of the bots by department, plus three visual stats.
 * Bot names are generic role names; figures come from the shared automation register (rounded
 * where the site already rounds them). No links, prompts, people, or internal data are shown.
 */

const departments = [
  { name: "SEO & marketing", icon: "↗", bots: ["SEO & AEO Lead", "Performance Marketing Lead", "SEO Executive", "Backlink Bot", "Reddit Engagement", "Affiliate Marketer", "AI Visibility Bot"] },
  { name: "Finance & tax", icon: "₹", bots: ["Controller", "Accountant", "Chargebee Auditor", "Books Auditor", "Income Tax Head", "Daily Margin", "Payroll Head"] },
  { name: "Data & analytics", icon: "▤", bots: ["Business Analyst", "SEO Report Bot", "Hunter Bot", "OKR Bot"] },
  { name: "Support & success", icon: "✦", bots: ["Support Head", "Refund Bot", "Live Agent", "Customer Success Head"] },
  { name: "Internal ops", icon: "⚙", bots: ["Booking Agent", "Deadline Enforcer", "Lead Bot"] },
];

const automationsByArea = [
  { area: "SEO & marketing", count: 46 },
  { area: "Finance & tax", count: 19 },
  { area: "Data & analytics", count: 17 },
  { area: "Ops & support", count: 3 },
];
const totalAutomations = automationsByArea.reduce((sum, item) => sum + item.count, 0);
const maxAutomations = Math.max(...automationsByArea.map((item) => item.count));
const botCount = departments.reduce((sum, department) => sum + department.bots.length, 1);

export function BotArmy() {
  return (
    <section className="sylva-section bot-army" id="bots" aria-labelledby="bot-army-heading">
      <div className="page-shell">
        <div className="sylva-section-head">
          <div><p className="sylva-index">02 / THE BOT ARMY</p><h2 id="bot-army-heading">Busy work is now<br /><em>bot work.</em></h2></div>
          <p>I rolled out AI agent teams across CallHippo. Every department now has bots doing work that used to be manual, and every bot that acts has a human check built in.</p>
        </div>

        <div className="bot-org" aria-label={`${botCount} bots across ${departments.length} departments`}>
          <div className="bot-hub">
            <div className="bot-hub-flow" aria-hidden="true"><span>You</span><b>→</b></div>
            <div className="bot-hub-copy"><p>Lead bot</p><h3>Executive Assistant</h3><small>Breaks work into tasks and hands each one to the right specialist bot.</small></div>
            <div className="bot-hub-check"><i aria-hidden="true" />Human check on every bot that acts</div>
          </div>
          <div className="bot-depts">
            {departments.map((department) => (
              <article className="bot-dept" key={department.name}>
                <div className="bot-dept-top"><span aria-hidden="true">{department.icon}</span><b>{department.bots.length} bots</b></div>
                <h3>{department.name}</h3>
                <ul className="bot-chips">{department.bots.map((bot) => <li key={bot}><i aria-hidden="true" />{bot}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>

        <div className="bot-stats">
          <article className="bot-stat">
            <p>Adoption</p>
            <strong>40+</strong>
            <span>people trained to run their own agent teams</span>
            <div className="bot-dots" aria-hidden="true">{Array.from({ length: 40 }, (_, index) => <i key={index} />)}</div>
          </article>
          <article className="bot-stat">
            <p>Shared register</p>
            <strong>{totalAutomations}</strong>
            <span>automations logged, each with an owner, schedule and status</span>
            <ul className="bot-bars">
              {automationsByArea.map((item) => (
                <li key={item.area}><span>{item.area}</span><div className="bot-bar"><i style={{ width: `${(item.count / maxAutomations) * 100}%` }} /></div><b>{item.count}</b></li>
              ))}
            </ul>
          </article>
          <article className="bot-stat">
            <p>Support & refunds</p>
            <strong>90%</strong>
            <span>less handling time with the Support Head and Refund bots</span>
            <ul className="bot-bars bot-bars-compare">
              <li><span>Before</span><div className="bot-bar"><i style={{ width: "100%" }} /></div><b>100%</b></li>
              <li><span>With bots</span><div className="bot-bar"><i style={{ width: "10%" }} /></div><b>10%</b></li>
            </ul>
          </article>
        </div>

        <div className="sylva-actions bot-army-actions"><Link className="sylva-button sylva-button-light glass-button" href="/work/grokbot-rollout">See how the rollout worked <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  );
}
