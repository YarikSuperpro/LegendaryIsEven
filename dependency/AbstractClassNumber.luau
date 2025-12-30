local module = {}
module.__index = module

function module.new(arg:number)
	return setmetatable({arg=arg},module):ComputeNumberSafe()
end
function module:ComputeNumberSafe()
	assert(typeof(self.arg)=="number","[Syntax Wrapper React Integration Extender]: NOT A NUMBER⚠⚠⚠⚠💀💀💀")
	--lambda safe getter (optimized)
	return (function() return self.arg==self.arg and self.arg end)()
end


return module
