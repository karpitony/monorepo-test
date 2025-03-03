class Logger {
  private static isDevelopment(): boolean {
    return (
      import.meta.env.MODE === "development" ||
      (typeof window !== "undefined" && window.location.hostname.startsWith("dev."))
    );
  }

  private static formatMessage(level: string, ...messages: unknown[]): string {
    const timestamp = new Date().toISOString();
    const formattedMessages = messages.map(message =>
      typeof message === "object" ? JSON.stringify(message, null, 2) : message
    ).join(" ");
    return `[${timestamp}] [${level.toUpperCase()}]: ${formattedMessages}`;
  }

  static log(...messages: unknown[]): void {
    if (this.isDevelopment()) console.log(this.formatMessage("log", ...messages));
  }

  static warn(...messages: unknown[]): void {
    if (this.isDevelopment()) console.warn(this.formatMessage("warn", ...messages));
  }

  static error(...messages: unknown[]): void {
    if (this.isDevelopment()) console.error(this.formatMessage("error", ...messages));
  }

  static info(...messages: unknown[]): void {
    if (this.isDevelopment()) console.info(this.formatMessage("info", ...messages));
  }

  static debug(...messages: unknown[]): void {
    if (this.isDevelopment()) console.debug(this.formatMessage("debug", ...messages));
  }
}

export default Logger;