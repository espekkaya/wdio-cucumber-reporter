"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var reporter_1 = require("@wdio/reporter");
var esc = {
    sp: '\u0020',
    nl: '\n'
};
var suiteEndOnce = true;
var CucumberReporter = /** @class */ (function (_super) {
    __extends(CucumberReporter, _super);
    function CucumberReporter(options) {
        var _this = this;
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true });
        _this = _super.call(this, options) || this;
        return _this;
    }
    CucumberReporter.prototype.onSuiteStart = function (test) {
        if (test.type == "feature")
            process.stdout.write("" + esc.sp + esc.sp + "Feature: " + test.title + esc.nl);
        else
            process.stdout.write("" + esc.sp + esc.sp + esc.sp + esc.sp + "Scenario: " + test.title + esc.nl);
    };
    CucumberReporter.prototype.onTestPass = function (test) {
        process.stdout.write("\u2713 " + esc.sp + esc.sp + esc.sp + esc.sp + esc.sp + esc.sp + test.title + esc.nl);
    };
    CucumberReporter.prototype.onTestFail = function (test) {
        // process.stdout.write(`𐄂 ${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.title}${esc.nl}
        //     ${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.error.message}${esc.nl}
        //     ${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.error.stack}${esc.nl}
        // `)
    };
    CucumberReporter.prototype.onTestSkip = function (test) {
        process.stdout.write("\u23AF " + esc.sp + esc.sp + esc.sp + esc.sp + esc.sp + esc.sp + test.title + esc.nl);
    };
    CucumberReporter.prototype.onSuiteEnd = function () {
        if (!suiteEndOnce)
            return;
        suiteEndOnce = false;
        var results = this.counts;
        var total = results.failures + results.passes + results.skipping;
        process.stdout.write(total + ' steps (' + results.passes + ' passed, ' + results.failures + ' failed, ' + results.skipping + ' skipped)' + esc.nl + esc.nl);
    };
    return CucumberReporter;
}(reporter_1["default"]));
exports["default"] = CucumberReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBRTFDLElBQU0sR0FBRyxHQUFHO0lBQ1IsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsSUFBSTtDQUNYLENBQUE7QUFFRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7QUFFeEI7SUFBOEMsb0NBQVk7SUFFdEQsMEJBQVksT0FBTztRQUFuQixpQkFNQztRQUxHOztXQUVHO1FBQ0gsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFDbEQsUUFBQSxrQkFBTSxPQUFPLENBQUMsU0FBQTs7SUFDbEIsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVM7WUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLGlCQUFZLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUksQ0FBQyxDQUFBOztZQUV6RSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLGtCQUFhLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUksQ0FBQyxDQUFBO0lBQ3BHLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBSSxDQUFDLENBQUE7SUFDMUcsQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsd0dBQXdHO1FBQ3hHLG9HQUFvRztRQUNwRyxrR0FBa0c7UUFDbEcsS0FBSztJQUNULENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBSSxDQUFDLENBQUE7SUFDMUcsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxJQUFHLENBQUMsWUFBWTtZQUNaLE9BQU87UUFFWCxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUE7UUFFbEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoSyxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBM0NELENBQThDLHFCQUFZLEdBMkN6RCJ9