export class ReportGenerator {
  constructor() {
    this.ready = false;
    this.records = [];
  }

  initialize() {
    this.ready = true;
    this.records = [];
    console.log("初期化完了");
  }

  addRecord(record) {
    if (!this.ready) throw new Error("初期化されていません");
    this.records.push(record);
  }

  generate() {
    if (!this.ready) throw new Error("初期化されていません");
    return {
      total: this.records.length,
      items: [...this.records],
    };
  }
  shutdown() {
    this.ready = false;
    this.records = [];
    console.log("  → ReportGenerator シャットダウン完了");
  }
}
