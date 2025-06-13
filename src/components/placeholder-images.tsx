import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function DashboardPlaceholder() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] bg-muted/50 rounded-lg animate-pulse"></div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="w-full h-auto">
      <div className="w-full bg-card dark:bg-slate-900 rounded-lg overflow-hidden border border-border">
        {/* Header bar */}
        <div className="flex items-center justify-between p-3 md:p-4 border-b border-border">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 dark:bg-blue-700/30 mr-3 flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                T
              </span>
            </div>
            <span className="font-medium text-sm md:text-base">
              TrioChat Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-muted/50 dark:bg-slate-800/80"></div>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-muted/50 dark:bg-slate-800/80"></div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-3 md:p-4 dark:bg-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 md:mb-6">
            <div className="bg-background dark:bg-slate-800/50 rounded-lg p-3 border border-border dark:border-slate-700/50">
              <div className="text-xs md:text-sm text-muted-foreground dark:text-slate-400 mb-1">
                Total Conversation
              </div>
              <div className="text-xl md:text-2xl font-bold dark:text-white">
                8,942
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                +15% from last month
              </div>
            </div>
            <div className="bg-background dark:bg-slate-800/50 rounded-lg p-3 border border-border dark:border-slate-700/50">
              <div className="text-xs md:text-sm text-muted-foreground dark:text-slate-400 mb-1">
                Active Chatbots
              </div>
              <div className="text-xl md:text-2xl font-bold dark:text-white">
                12
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                +3 new this month
              </div>
            </div>
            <div className="bg-background dark:bg-slate-800/50 rounded-lg p-3 border border-border dark:border-slate-700/50">
              <div className="text-xs md:text-sm text-muted-foreground dark:text-slate-400 mb-1">
                Response Rate
              </div>
              <div className="text-xl md:text-2xl font-bold dark:text-white">
                98.5%
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                +2.5% from last month
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 bg-background dark:bg-slate-800/50 rounded-lg p-3 border border-border dark:border-slate-700/50 h-[160px] md:h-[200px] flex flex-col">
              <div className="text-xs md:text-sm font-medium dark:text-white mb-2 md:mb-4">
                Conversation Volume
                <div className="text-s text-blue-600 dark:text-blue-400 mt-1">
                  <p className="p-3">Total Conversations : 378,210</p>
                  <p className="p-3">Average per day : 45,940</p>
                  <p className="p-3">Peak Daily Messages : 48,000+</p>
              </div>
              </div>
              <div className="flex-1 flex items-end space-x-1 md:space-x-2">
                {[40, 55, 70, 45, 60, 75, 65, 80, 90, 70, 85, 95].map(
                  (height, i) => (
                    <div key={i} className="flex-1 flex items-end">
                      <div
                        className="w-full bg-blue-600/20 dark:bg-blue-600/30 rounded-t"
                        style={{ height: `${height}%` }}
                      >
            
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-background dark:bg-slate-800/50 rounded-lg p-3 border border-border dark:border-slate-700/50 h-[160px] md:h-[200px] flex flex-col">
              <div className="text-xs md:text-sm font-medium dark:text-white mb-2 md:mb-4">
                Conversion Rate
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-24 md:w-32 h-24 md:h-32 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={
                        isDark
                          ? "rgba(37, 99, 235, 0.2)"
                          : "rgba(59, 130, 246, 0.2)"
                      }
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={
                        isDark ? "rgb(59, 130, 246)" : "rgb(59, 130, 246)"
                      }
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="50"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute text-xl md:text-2xl font-bold dark:text-white">
                    78%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlatformDemoPlaceholder() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] bg-muted/50 rounded-lg animate-pulse"></div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="w-full h-auto">
      <div className="w-full bg-card rounded-lg overflow-hidden border border-border">
        {/* Chat interface */}
        <div className="flex flex-col h-[400px]">
          {/* Chat header */}
          <div className="flex items-center p-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-green-500/20 mr-3 flex items-center justify-center">
              <span className="text-green-500 font-bold text-sm">W</span>
            </div>
            <div>
              <div className="font-medium">WhatsApp Business</div>
              <div className="text-xs text-muted-foreground">Online</div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {/* Customer message */}
            <div className="flex items-end max-w-[80%]">
              <div className="bg-muted rounded-lg rounded-bl-none p-3">
                <p className="text-sm">
                  Hello! I&apos;m interested in your WhatsApp marketing
                  services.
                </p>
              </div>
              <div className="text-xs text-muted-foreground ml-2">10:12 AM</div>
            </div>

            {/* Bot response */}
            <div className="flex items-end justify-end">
              <div className="flex items-end max-w-[80%]">
                <div className="text-xs text-muted-foreground mr-2">
                  10:13 AM
                </div>
                <div
                  className={`${
                    isDark
                      ? "bg-blue-900/80 text-blue-100"
                      : "bg-blue-100 text-blue-900"
                  } rounded-lg rounded-br-none p-3`}
                >
                  <p className="text-sm">
                    Hi there! 👋 Thanks for reaching out to TrioChat. I&apos;m
                    your AI assistant and I&apos;d be happy to help you learn
                    more about our WhatsApp marketing services.
                  </p>
                </div>
              </div>
            </div>

            {/* Bot follow-up */}
            <div className="flex items-end justify-end">
              <div className="flex items-end max-w-[80%]">
                <div className="text-xs text-muted-foreground mr-2">
                  10:13 AM
                </div>
                <div
                  className={`${
                    isDark
                      ? "bg-blue-900/80 text-blue-100"
                      : "bg-blue-100 text-blue-900"
                  } rounded-lg rounded-br-none p-3`}
                >
                  <p className="text-sm">
                    Could you tell me a bit about your business so I can provide
                    more relevant information?
                  </p>
                </div>
              </div>
            </div>

            {/* Customer reply */}
            <div className="flex items-end max-w-[80%]">
              <div className="bg-muted rounded-lg rounded-bl-none p-3">
                <p className="text-sm">
                  I run an e-commerce store selling fitness equipment. We want
                  to use WhatsApp to engage with customers and send promotions.
                </p>
              </div>
              <div className="text-xs text-muted-foreground ml-2">10:15 AM</div>
            </div>

            {/* Bot response */}
            <div className="flex items-end justify-end">
              <div className="flex items-end max-w-[80%]">
                <div className="text-xs text-muted-foreground mr-2">
                  10:16 AM
                </div>
                <div
                  className={`${
                    isDark
                      ? "bg-blue-900/80 text-blue-100"
                      : "bg-blue-100 text-blue-900"
                  } rounded-lg rounded-br-none p-3`}
                >
                  <p className="text-sm">
                    Perfect! For e-commerce businesses like yours, our platform
                    offers:
                  </p>
                  <ul className="text-sm list-disc pl-4 mt-1">
                    <li>Automated order confirmations and shipping updates</li>
                    <li>Product recommendations based on past purchases</li>
                    <li>Personalized promotional campaigns</li>
                    <li>Abandoned cart reminders</li>
                  </ul>
                  <p className="text-sm mt-2">
                    Would you like to see a demo of how this works for fitness
                    equipment stores?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
