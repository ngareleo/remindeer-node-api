type AppConfig = {
  speedLimiter: SpeedLimitConfig;
  jsonConfig: JsonConfig;
};

type SpeedLimitConfig = {
  windowMs: number;
  delayAfter: number;
  delayMs: number;
};

type JsonConfig = {
  limit: string;
};
