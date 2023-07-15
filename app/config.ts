export default function createAppConfig(): AppConfig {
  return {
    speedLimiter: {
      windowMs: 15 * 60 * 1000,
      delayAfter: 100,
      delayMs: 1000,
    },
    jsonConfig: {
      limit: "10kb",
    },
  };
}
