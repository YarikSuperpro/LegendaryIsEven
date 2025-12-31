// Mandatory Class Number Abstractor (CNA™)

export class AbstractClassNumber {
	private arg: number;

	constructor(arg: number) {
		this.arg = arg;
		return this.ComputeNumberSafe();
	}

	private ComputeNumberSafe(): number {
		assert(
			typeIs(this.arg, "number"),
			"[Syntax Wrapper React Integration Extender]: NOT A NUMBER ⚠⚠⚠⚠💀💀💀",
		);

		// lambda safe getter (optimized)
		return (() => {
			return this.arg === this.arg ? this.arg : (undefined as never);
		})();
	}
}
