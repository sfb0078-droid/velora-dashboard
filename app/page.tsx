export default function DashboardPage() {
  const statCards = [
    {
      title: "Active Clients",
      value: "128",
      change: "+12% this month",
      icon: "👥",
    },
    {
      title: "Open Jobs",
      value: "24",
      change: "+5 new today",
      icon: "🛠️",
    },
    {
      title: "Monthly Revenue",
      value: "£18,420",
      change: "+8.4% vs last month",
      icon: "💷",
    },
    {
      title: "Pending Invoices",
      value: "9",
      change: "3 overdue",
      icon: "🧾",
    },
  ];

  const quickActions = [
    "Create New Client",
    "Schedule Service Visit",
    "Generate Invoice",
    "Add Team Member",
    "View Reports",
    "Open Task Board",
  ];

  const recentActivity = [
    "New client onboarded: Greenfield Estate",
    "Invoice #2038 marked as paid",
    "Maintenance visit scheduled for Hawthorne Manor",
    "Staff member assigned to weekly grounds inspection",
    "Client subscription upgraded to Premium Care",
  ];

  const upcomingJobs = [
    {
      property: "Ashford Estate",
      service: "Grounds Maintenance",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      property: "Willow Manor",
      service: "Security Check",
      time: "11:30 AM",
      status: "In Progress",
    },
    {
      property: "Foxglove Residence",
      service: "Cleaning & Upkeep",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      property: "Stonebridge Hall",
      service: "Inventory Review",
      time: "04:30 PM",
      status: "Confirmed",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10">
        {/* Top Header */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-8 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-400">
                Velora Estate Care
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Business Owner Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-neutral-300 sm:text-base">
                Welcome back. Here’s a live snapshot of operations, finances,
                service activity, and client performance across the business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <button className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/20">
                + New Client
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                + New Job
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                + Invoice
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-neutral-400">{card.title}</span>
                <span className="text-2xl">{card.icon}</span>
              </div>
              <div className="text-3xl font-bold tracking-tight">{card.value}</div>
              <p className="mt-2 text-sm text-emerald-400">{card.change}</p>
            </div>
          ))}
        </section>

        {/* Main Content Grid */}
        <section className="grid gap-6 xl:grid-cols-3">
          {/* Left Column */}
          <div className="flex flex-col gap-6 xl:col-span-2">
            {/* Performance Overview */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Performance Overview</h2>
                  <p className="text-sm text-neutral-400">
                    Placeholder visual for revenue, workload, and service delivery.
                  </p>
                </div>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10">
                  View Full Report
                </button>
              </div>

              <div className="flex h-72 items-end gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6">
                {[35, 55, 42, 68, 50, 74, 88, 66, 79, 60, 92, 84].map(
                  (height, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-500 to-cyan-400 shadow-md"
                        style={{ height: `${height * 2}px` }}
                      />
                      <span className="text-xs text-neutral-500">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Upcoming Jobs */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Upcoming Jobs</h2>
                  <p className="text-sm text-neutral-400">
                    Today’s scheduled estate services and site visits.
                  </p>
                </div>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10">
                  Open Schedule
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <div className="grid grid-cols-4 bg-white/5 px-4 py-3 text-sm font-medium text-neutral-300">
                  <span>Property</span>
                  <span>Service</span>
                  <span>Time</span>
                  <span>Status</span>
                </div>

                {upcomingJobs.map((job) => (
                  <div
                    key={`${job.property}-${job.time}`}
                    className="grid grid-cols-4 border-t border-white/10 px-4 py-4 text-sm text-neutral-200 transition hover:bg-white/[0.04]"
                  >
                    <span className="font-medium">{job.property}</span>
                    <span>{job.service}</span>
                    <span>{job.time}</span>
                    <span>
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                        {job.status}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Quick Actions */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Quick Actions</h2>
              <p className="mt-1 text-sm text-neutral-400">
                One-click shortcuts for the stuff you’ll use constantly.
              </p>

              <div className="mt-5 grid gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-emerald-400/30 hover:bg-white/10"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <p className="mt-1 text-sm text-neutral-400">
                Latest actions across clients, jobs, invoices, and team updates.
              </p>

              <div className="mt-5 space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <p className="text-sm leading-6 text-neutral-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Finance Snapshot */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Finance Snapshot</h2>
              <p className="mt-1 text-sm text-neutral-300">
                A quick view of cash flow and outstanding items.
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Income This Month</p>
                  <p className="mt-1 text-2xl font-bold">£18,420</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Expenses This Month</p>
                  <p className="mt-1 text-2xl font-bold">£6,870</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Net Position</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-300">
                    £11,550
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}