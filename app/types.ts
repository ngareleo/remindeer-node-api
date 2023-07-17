export type AppConfig = {
  speedLimiter: SpeedLimitConfig;
  jsonConfig: JsonConfig;
};

export type SpeedLimitConfig = {
  windowMs: number;
  delayAfter: number;
  delayMs: number;
};

export type JsonConfig = {
  limit: string;
};

export type Window = {
  allDay: boolean;
  from: Date;
  to: Date;
};
