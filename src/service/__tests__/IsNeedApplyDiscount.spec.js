import IsNeedApplyDiscount from "../IsNeedApplyDiscount";


describe('Testing IsNeedApplyDiscount', ()=>{

    test('should returns true if price is greater or equal than 500', function () {
        expect(IsNeedApplyDiscount(500)).toBe(true);
    });

    test('should returns false if price is less than 500', function () {
        expect(IsNeedApplyDiscount(499)).toBe(false);
    });

});