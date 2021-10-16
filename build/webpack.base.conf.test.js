const rewire = require("rewire")
const webpack_base_conf = rewire("./webpack.base.conf")
const resolve = webpack_base_conf.__get__("resolve")
const createLintingRule = webpack_base_conf.__get__("createLintingRule")
// @ponicode
describe("resolve", () => {
    test("0", () => {
        let callFunction = () => {
            resolve("/lustre/storeB/immutable/archive/projects/MIST2/AM2p5_MIST2/archive/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            resolve("/lustre/storeB/users/lisesg/harmonie/AM2p5_MIST2_c38h12/archive/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            resolve("/lustre/storeB/immutable/short-term-archive/DNMI_AROME_METCOOP/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            resolve("/Synergy.app/Contents/MacOS/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            resolve("relocate/builddir/Default/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            resolve(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createLintingRule", () => {
    test("0", () => {
        let callFunction = () => {
            createLintingRule()
        }
    
        expect(callFunction).not.toThrow()
    })
})
