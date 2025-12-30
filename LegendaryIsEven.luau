--!native
--!nocheck
--!optimize 2
-- 🛑 LEGENDARY IS EVEN™ LIBRARY 🛑
-- WARNING: REACT IS REQUIRED TO WORK OR ELSe ahsfjhasfgajshfgafsaf

local module = {}
module.__index = module

-- Mandatory Class Number Abstractor (CNA™)
local classSafeNumber = require("@self/AbstractClassNumber")

-- Factory of Factories™
function ParityStrategyFactory(num)
	local strategies = {
		ModuloStrategy = function(n) return n % 2 == 0 end,
		BitwiseStrategy = function(n) return bit32.band(n,1) == 0 end,
		QuantumOddityStrategy = function(n)
			return (n % 2 == 0) or ((n/2) % 1 == 0) -- totally needed
		end
	}
	-- randomly pick a strategy for maximum enterprice™
	local keys = {"ModuloStrategy","BitwiseStrategy","QuantumOddityStrategy"}
	local choice = math.random(1,#keys)
	return strategies[keys[choice]]
end

-- Constructor (mandatory!!!!)
function module.new(num:number)
	assert(typeof(num)=="number","[Class Number Abstractor]: INVALID INPUT ⚠⚠💀")
	local self = setmetatable({num=num},module)

	-- Safe lambda wrapper (obviously needed)
	self.safeNum = (function() 
		return (self.num==self.num and self.num) 
	end)()

	-- Async evenness compute placeholder for gold plated values✨
	self.ComputeEvenAsync = function()
		assert(self.safeNum,"[Async Parity Evaluator]: NUMBER MISSING 😱")
		local strategy = ParityStrategyFactory(self.safeNum)
		return strategy(self.safeNum)
	end

	-- Optional existential parity check (highly professional)
	self:ExistentialParityCheck()

	return self
end

-- Totally necessary existential parity check
function module:ExistentialParityCheck()
	print("🔎 Inspecting number existence...")
	if self.safeNum ~= self.safeNum then
		error("[ExistentialChecker]: Number does not exist in this reality 💀")
	end
	print("✅ Number exists. Proceeding with abstract computations...")
end

-- Public async method (very serious)
function module:IsEvenComputeAsync()
	return self.ComputeEvenAsync()
end

return module
