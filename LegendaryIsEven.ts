// 🛑 LEGENDARY IS EVEN™ LIBRARY 🛑
// Roblox-TS Enterprise Edition
// WARNING: REACT IS REQUIRED TO WORK OR ELSE ahsfjhasfgajshfgafsaf

//!nocheck
//!optimize 2

import { AbstractClassNumber } from "./AbstractClassNumber";

export class LegendaryIsEven {
	private num: number;
	private safeNum: number;
	private ComputeEvenAsyncInternal: () => boolean;

	constructor(num: number) {
		assert(typeIs(num, "number"), "[Class Number Abstractor]: INVALID INPUT ⚠⚠💀");

		this.num = num;

		// Safe lambda wrapper (obviously needed)
		this.safeNum = (() => {
			return this.num === this.num ? this.num : (undefined as never);
		})();

		// Async evenness compute placeholder for gold plated values✨
		this.ComputeEvenAsyncInternal = () => {
			assert(this.safeNum !== undefined, "[Async Parity Evaluator]: NUMBER MISSING 😱");
			const strategy = ParityStrategyFactory(this.safeNum);
			return strategy(this.safeNum);
		};

		// Optional existential parity check (highly professional)
		this.ExistentialParityCheck();
	}

	private ExistentialParityCheck(): void {
		print("🔎 Inspecting number existence...");
		if (this.safeNum !== this.safeNum) {
			error("[ExistentialChecker]: Number does not exist in this reality 💀");
		}
		print("✅ Number exists. Proceeding with abstract computations...");
	}

	// Public async method (very serious)
	public IsEvenComputeAsync(): boolean {
		return this.ComputeEvenAsyncInternal();
	}
}

// Factory of Factories™
function ParityStrategyFactory(num: number): (n: number) => boolean {
	const strategies = {
		ModuloStrategy: (n: number) => n % 2 === 0,
		BitwiseStrategy: (n: number) => (n & 1) === 0,
		QuantumOddityStrategy: (n: number) =>
			n % 2 === 0 || ((n / 2) % 1 === 0), // totally needed
	};

	const keys = ["ModuloStrategy", "BitwiseStrategy", "QuantumOddityStrategy"] as const;
	const choice = math.random(1, keys.size()) - 1;
	return strategies[keys[choice]];
}
