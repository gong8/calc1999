"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/copy-to-clipboard";
exports.ids = ["vendor-chunks/copy-to-clipboard"];
exports.modules = {

/***/ "(ssr)/./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar deselectCurrent = __webpack_require__(/*! toggle-selection */ \"(ssr)/./node_modules/toggle-selection/index.js\");\nvar clipboardToIE11Formatting = {\n    \"text/plain\": \"Text\",\n    \"text/html\": \"Url\",\n    \"default\": \"Text\"\n};\nvar defaultMessage = \"Copy to clipboard: #{key}, Enter\";\nfunction format(message) {\n    var copyKey = (/mac os x/i.test(navigator.userAgent) ? \"⌘\" : \"Ctrl\") + \"+C\";\n    return message.replace(/#{\\s*key\\s*}/g, copyKey);\n}\nfunction copy(text, options) {\n    var debug, message, reselectPrevious, range, selection, mark, success = false;\n    if (!options) {\n        options = {};\n    }\n    debug = options.debug || false;\n    try {\n        reselectPrevious = deselectCurrent();\n        range = document.createRange();\n        selection = document.getSelection();\n        mark = document.createElement(\"span\");\n        mark.textContent = text;\n        // avoid screen readers from reading out loud the text\n        mark.ariaHidden = \"true\";\n        // reset user styles for span element\n        mark.style.all = \"unset\";\n        // prevents scrolling to the end of the page\n        mark.style.position = \"fixed\";\n        mark.style.top = 0;\n        mark.style.clip = \"rect(0, 0, 0, 0)\";\n        // used to preserve spaces and line breaks\n        mark.style.whiteSpace = \"pre\";\n        // do not inherit user-select (it may be `none`)\n        mark.style.webkitUserSelect = \"text\";\n        mark.style.MozUserSelect = \"text\";\n        mark.style.msUserSelect = \"text\";\n        mark.style.userSelect = \"text\";\n        mark.addEventListener(\"copy\", function(e) {\n            e.stopPropagation();\n            if (options.format) {\n                e.preventDefault();\n                if (typeof e.clipboardData === \"undefined\") {\n                    debug && console.warn(\"unable to use e.clipboardData\");\n                    debug && console.warn(\"trying IE specific stuff\");\n                    window.clipboardData.clearData();\n                    var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting[\"default\"];\n                    window.clipboardData.setData(format, text);\n                } else {\n                    e.clipboardData.clearData();\n                    e.clipboardData.setData(options.format, text);\n                }\n            }\n            if (options.onCopy) {\n                e.preventDefault();\n                options.onCopy(e.clipboardData);\n            }\n        });\n        document.body.appendChild(mark);\n        range.selectNodeContents(mark);\n        selection.addRange(range);\n        var successful = document.execCommand(\"copy\");\n        if (!successful) {\n            throw new Error(\"copy command was unsuccessful\");\n        }\n        success = true;\n    } catch (err) {\n        debug && console.error(\"unable to copy using execCommand: \", err);\n        debug && console.warn(\"trying IE specific stuff\");\n        try {\n            window.clipboardData.setData(options.format || \"text\", text);\n            options.onCopy && options.onCopy(window.clipboardData);\n            success = true;\n        } catch (err) {\n            debug && console.error(\"unable to copy using clipboardData: \", err);\n            debug && console.error(\"falling back to prompt\");\n            message = format(\"message\" in options ? options.message : defaultMessage);\n            window.prompt(message, text);\n        }\n    } finally{\n        if (selection) {\n            if (typeof selection.removeRange == \"function\") {\n                selection.removeRange(range);\n            } else {\n                selection.removeAllRanges();\n            }\n        }\n        if (mark) {\n            document.body.removeChild(mark);\n        }\n        reselectPrevious();\n    }\n    return success;\n}\nmodule.exports = copy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29weS10by1jbGlwYm9hcmQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFFYixJQUFJQSxrQkFBa0JDLG1CQUFPQSxDQUFDLHdFQUFrQjtBQUVoRCxJQUFJQyw0QkFBNEI7SUFDOUIsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0FBQ2I7QUFFQSxJQUFJQyxpQkFBaUI7QUFFckIsU0FBU0MsT0FBT0MsT0FBTztJQUNyQixJQUFJQyxVQUFVLENBQUMsWUFBWUMsSUFBSSxDQUFDQyxVQUFVQyxTQUFTLElBQUksTUFBTSxNQUFLLElBQUs7SUFDdkUsT0FBT0osUUFBUUssT0FBTyxDQUFDLGlCQUFpQko7QUFDMUM7QUFFQSxTQUFTSyxLQUFLQyxJQUFJLEVBQUVDLE9BQU87SUFDekIsSUFBSUMsT0FDRlQsU0FDQVUsa0JBQ0FDLE9BQ0FDLFdBQ0FDLE1BQ0FDLFVBQVU7SUFDWixJQUFJLENBQUNOLFNBQVM7UUFDWkEsVUFBVSxDQUFDO0lBQ2I7SUFDQUMsUUFBUUQsUUFBUUMsS0FBSyxJQUFJO0lBQ3pCLElBQUk7UUFDRkMsbUJBQW1CZjtRQUVuQmdCLFFBQVFJLFNBQVNDLFdBQVc7UUFDNUJKLFlBQVlHLFNBQVNFLFlBQVk7UUFFakNKLE9BQU9FLFNBQVNHLGFBQWEsQ0FBQztRQUM5QkwsS0FBS00sV0FBVyxHQUFHWjtRQUNuQixzREFBc0Q7UUFDdERNLEtBQUtPLFVBQVUsR0FBRztRQUNsQixxQ0FBcUM7UUFDckNQLEtBQUtRLEtBQUssQ0FBQ0MsR0FBRyxHQUFHO1FBQ2pCLDRDQUE0QztRQUM1Q1QsS0FBS1EsS0FBSyxDQUFDRSxRQUFRLEdBQUc7UUFDdEJWLEtBQUtRLEtBQUssQ0FBQ0csR0FBRyxHQUFHO1FBQ2pCWCxLQUFLUSxLQUFLLENBQUNJLElBQUksR0FBRztRQUNsQiwwQ0FBMEM7UUFDMUNaLEtBQUtRLEtBQUssQ0FBQ0ssVUFBVSxHQUFHO1FBQ3hCLGdEQUFnRDtRQUNoRGIsS0FBS1EsS0FBSyxDQUFDTSxnQkFBZ0IsR0FBRztRQUM5QmQsS0FBS1EsS0FBSyxDQUFDTyxhQUFhLEdBQUc7UUFDM0JmLEtBQUtRLEtBQUssQ0FBQ1EsWUFBWSxHQUFHO1FBQzFCaEIsS0FBS1EsS0FBSyxDQUFDUyxVQUFVLEdBQUc7UUFDeEJqQixLQUFLa0IsZ0JBQWdCLENBQUMsUUFBUSxTQUFTQyxDQUFDO1lBQ3RDQSxFQUFFQyxlQUFlO1lBQ2pCLElBQUl6QixRQUFRVCxNQUFNLEVBQUU7Z0JBQ2xCaUMsRUFBRUUsY0FBYztnQkFDaEIsSUFBSSxPQUFPRixFQUFFRyxhQUFhLEtBQUssYUFBYTtvQkFDMUMxQixTQUFTMkIsUUFBUUMsSUFBSSxDQUFDO29CQUN0QjVCLFNBQVMyQixRQUFRQyxJQUFJLENBQUM7b0JBQ3RCQyxPQUFPSCxhQUFhLENBQUNJLFNBQVM7b0JBQzlCLElBQUl4QyxTQUFTRix5QkFBeUIsQ0FBQ1csUUFBUVQsTUFBTSxDQUFDLElBQUlGLHlCQUF5QixDQUFDLFVBQVU7b0JBQzlGeUMsT0FBT0gsYUFBYSxDQUFDSyxPQUFPLENBQUN6QyxRQUFRUTtnQkFDdkMsT0FBTztvQkFDTHlCLEVBQUVHLGFBQWEsQ0FBQ0ksU0FBUztvQkFDekJQLEVBQUVHLGFBQWEsQ0FBQ0ssT0FBTyxDQUFDaEMsUUFBUVQsTUFBTSxFQUFFUTtnQkFDMUM7WUFDRjtZQUNBLElBQUlDLFFBQVFpQyxNQUFNLEVBQUU7Z0JBQ2xCVCxFQUFFRSxjQUFjO2dCQUNoQjFCLFFBQVFpQyxNQUFNLENBQUNULEVBQUVHLGFBQWE7WUFDaEM7UUFDRjtRQUVBcEIsU0FBUzJCLElBQUksQ0FBQ0MsV0FBVyxDQUFDOUI7UUFFMUJGLE1BQU1pQyxrQkFBa0IsQ0FBQy9CO1FBQ3pCRCxVQUFVaUMsUUFBUSxDQUFDbEM7UUFFbkIsSUFBSW1DLGFBQWEvQixTQUFTZ0MsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQ0QsWUFBWTtZQUNmLE1BQU0sSUFBSUUsTUFBTTtRQUNsQjtRQUNBbEMsVUFBVTtJQUNaLEVBQUUsT0FBT21DLEtBQUs7UUFDWnhDLFNBQVMyQixRQUFRYyxLQUFLLENBQUMsc0NBQXNDRDtRQUM3RHhDLFNBQVMyQixRQUFRQyxJQUFJLENBQUM7UUFDdEIsSUFBSTtZQUNGQyxPQUFPSCxhQUFhLENBQUNLLE9BQU8sQ0FBQ2hDLFFBQVFULE1BQU0sSUFBSSxRQUFRUTtZQUN2REMsUUFBUWlDLE1BQU0sSUFBSWpDLFFBQVFpQyxNQUFNLENBQUNILE9BQU9ILGFBQWE7WUFDckRyQixVQUFVO1FBQ1osRUFBRSxPQUFPbUMsS0FBSztZQUNaeEMsU0FBUzJCLFFBQVFjLEtBQUssQ0FBQyx3Q0FBd0NEO1lBQy9EeEMsU0FBUzJCLFFBQVFjLEtBQUssQ0FBQztZQUN2QmxELFVBQVVELE9BQU8sYUFBYVMsVUFBVUEsUUFBUVIsT0FBTyxHQUFHRjtZQUMxRHdDLE9BQU9hLE1BQU0sQ0FBQ25ELFNBQVNPO1FBQ3pCO0lBQ0YsU0FBVTtRQUNSLElBQUlLLFdBQVc7WUFDYixJQUFJLE9BQU9BLFVBQVV3QyxXQUFXLElBQUksWUFBWTtnQkFDOUN4QyxVQUFVd0MsV0FBVyxDQUFDekM7WUFDeEIsT0FBTztnQkFDTEMsVUFBVXlDLGVBQWU7WUFDM0I7UUFDRjtRQUVBLElBQUl4QyxNQUFNO1lBQ1JFLFNBQVMyQixJQUFJLENBQUNZLFdBQVcsQ0FBQ3pDO1FBQzVCO1FBQ0FIO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUO0FBRUF5QyxPQUFPQyxPQUFPLEdBQUdsRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGMxOTk5Ly4vbm9kZV9tb2R1bGVzL2NvcHktdG8tY2xpcGJvYXJkL2luZGV4LmpzP2M0Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZXNlbGVjdEN1cnJlbnQgPSByZXF1aXJlKFwidG9nZ2xlLXNlbGVjdGlvblwiKTtcblxudmFyIGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmcgPSB7XG4gIFwidGV4dC9wbGFpblwiOiBcIlRleHRcIixcbiAgXCJ0ZXh0L2h0bWxcIjogXCJVcmxcIixcbiAgXCJkZWZhdWx0XCI6IFwiVGV4dFwiXG59XG5cbnZhciBkZWZhdWx0TWVzc2FnZSA9IFwiQ29weSB0byBjbGlwYm9hcmQ6ICN7a2V5fSwgRW50ZXJcIjtcblxuZnVuY3Rpb24gZm9ybWF0KG1lc3NhZ2UpIHtcbiAgdmFyIGNvcHlLZXkgPSAoL21hYyBvcyB4L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IFwi4oyYXCIgOiBcIkN0cmxcIikgKyBcIitDXCI7XG4gIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoLyN7XFxzKmtleVxccyp9L2csIGNvcHlLZXkpO1xufVxuXG5mdW5jdGlvbiBjb3B5KHRleHQsIG9wdGlvbnMpIHtcbiAgdmFyIGRlYnVnLFxuICAgIG1lc3NhZ2UsXG4gICAgcmVzZWxlY3RQcmV2aW91cyxcbiAgICByYW5nZSxcbiAgICBzZWxlY3Rpb24sXG4gICAgbWFyayxcbiAgICBzdWNjZXNzID0gZmFsc2U7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBkZWJ1ZyA9IG9wdGlvbnMuZGVidWcgfHwgZmFsc2U7XG4gIHRyeSB7XG4gICAgcmVzZWxlY3RQcmV2aW91cyA9IGRlc2VsZWN0Q3VycmVudCgpO1xuXG4gICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXG4gICAgbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG1hcmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIC8vIGF2b2lkIHNjcmVlbiByZWFkZXJzIGZyb20gcmVhZGluZyBvdXQgbG91ZCB0aGUgdGV4dFxuICAgIG1hcmsuYXJpYUhpZGRlbiA9IFwidHJ1ZVwiXG4gICAgLy8gcmVzZXQgdXNlciBzdHlsZXMgZm9yIHNwYW4gZWxlbWVudFxuICAgIG1hcmsuc3R5bGUuYWxsID0gXCJ1bnNldFwiO1xuICAgIC8vIHByZXZlbnRzIHNjcm9sbGluZyB0byB0aGUgZW5kIG9mIHRoZSBwYWdlXG4gICAgbWFyay5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICBtYXJrLnN0eWxlLnRvcCA9IDA7XG4gICAgbWFyay5zdHlsZS5jbGlwID0gXCJyZWN0KDAsIDAsIDAsIDApXCI7XG4gICAgLy8gdXNlZCB0byBwcmVzZXJ2ZSBzcGFjZXMgYW5kIGxpbmUgYnJlYWtzXG4gICAgbWFyay5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmVcIjtcbiAgICAvLyBkbyBub3QgaW5oZXJpdCB1c2VyLXNlbGVjdCAoaXQgbWF5IGJlIGBub25lYClcbiAgICBtYXJrLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcInRleHRcIjtcbiAgICBtYXJrLnN0eWxlLk1velVzZXJTZWxlY3QgPSBcInRleHRcIjtcbiAgICBtYXJrLnN0eWxlLm1zVXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUudXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChvcHRpb25zLmZvcm1hdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgZS5jbGlwYm9hcmREYXRhID09PSBcInVuZGVmaW5lZFwiKSB7IC8vIElFIDExXG4gICAgICAgICAgZGVidWcgJiYgY29uc29sZS53YXJuKFwidW5hYmxlIHRvIHVzZSBlLmNsaXBib2FyZERhdGFcIik7XG4gICAgICAgICAgZGVidWcgJiYgY29uc29sZS53YXJuKFwidHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmXCIpO1xuICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLmNsZWFyRGF0YSgpO1xuICAgICAgICAgIHZhciBmb3JtYXQgPSBjbGlwYm9hcmRUb0lFMTFGb3JtYXR0aW5nW29wdGlvbnMuZm9ybWF0XSB8fCBjbGlwYm9hcmRUb0lFMTFGb3JtYXR0aW5nW1wiZGVmYXVsdFwiXVxuICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEoZm9ybWF0LCB0ZXh0KTtcbiAgICAgICAgfSBlbHNlIHsgLy8gYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgICAgICAgZS5jbGlwYm9hcmREYXRhLmNsZWFyRGF0YSgpO1xuICAgICAgICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKG9wdGlvbnMuZm9ybWF0LCB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMub25Db3B5KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb3B0aW9ucy5vbkNvcHkoZS5jbGlwYm9hcmREYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFyayk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobWFyayk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIGlmICghc3VjY2Vzc2Z1bCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29weSBjb21tYW5kIHdhcyB1bnN1Y2Nlc3NmdWxcIik7XG4gICAgfVxuICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWJ1ZyAmJiBjb25zb2xlLmVycm9yKFwidW5hYmxlIHRvIGNvcHkgdXNpbmcgZXhlY0NvbW1hbmQ6IFwiLCBlcnIpO1xuICAgIGRlYnVnICYmIGNvbnNvbGUud2FybihcInRyeWluZyBJRSBzcGVjaWZpYyBzdHVmZlwiKTtcbiAgICB0cnkge1xuICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShvcHRpb25zLmZvcm1hdCB8fCBcInRleHRcIiwgdGV4dCk7XG4gICAgICBvcHRpb25zLm9uQ29weSAmJiBvcHRpb25zLm9uQ29weSh3aW5kb3cuY2xpcGJvYXJkRGF0YSk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoXCJ1bmFibGUgdG8gY29weSB1c2luZyBjbGlwYm9hcmREYXRhOiBcIiwgZXJyKTtcbiAgICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoXCJmYWxsaW5nIGJhY2sgdG8gcHJvbXB0XCIpO1xuICAgICAgbWVzc2FnZSA9IGZvcm1hdChcIm1lc3NhZ2VcIiBpbiBvcHRpb25zID8gb3B0aW9ucy5tZXNzYWdlIDogZGVmYXVsdE1lc3NhZ2UpO1xuICAgICAgd2luZG93LnByb21wdChtZXNzYWdlLCB0ZXh0KTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVSYW5nZShyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmspIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFyayk7XG4gICAgfVxuICAgIHJlc2VsZWN0UHJldmlvdXMoKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG4iXSwibmFtZXMiOlsiZGVzZWxlY3RDdXJyZW50IiwicmVxdWlyZSIsImNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmciLCJkZWZhdWx0TWVzc2FnZSIsImZvcm1hdCIsIm1lc3NhZ2UiLCJjb3B5S2V5IiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInJlcGxhY2UiLCJjb3B5IiwidGV4dCIsIm9wdGlvbnMiLCJkZWJ1ZyIsInJlc2VsZWN0UHJldmlvdXMiLCJyYW5nZSIsInNlbGVjdGlvbiIsIm1hcmsiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsImdldFNlbGVjdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFyaWFIaWRkZW4iLCJzdHlsZSIsImFsbCIsInBvc2l0aW9uIiwidG9wIiwiY2xpcCIsIndoaXRlU3BhY2UiLCJ3ZWJraXRVc2VyU2VsZWN0IiwiTW96VXNlclNlbGVjdCIsIm1zVXNlclNlbGVjdCIsInVzZXJTZWxlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiY2xpcGJvYXJkRGF0YSIsImNvbnNvbGUiLCJ3YXJuIiwid2luZG93IiwiY2xlYXJEYXRhIiwic2V0RGF0YSIsIm9uQ29weSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdE5vZGVDb250ZW50cyIsImFkZFJhbmdlIiwic3VjY2Vzc2Z1bCIsImV4ZWNDb21tYW5kIiwiRXJyb3IiLCJlcnIiLCJlcnJvciIsInByb21wdCIsInJlbW92ZVJhbmdlIiwicmVtb3ZlQWxsUmFuZ2VzIiwicmVtb3ZlQ2hpbGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/copy-to-clipboard/index.js\n");

/***/ })

};
;