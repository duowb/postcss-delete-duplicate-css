/*
 * @Author: dwb
 * @Date: 2021-04-09 14:32:05
 * @LastEditors: dwb
 * @LastEditTime: 2021-04-09 17:31:16
 * @Description: file content
 */
const postcss = require("postcss");
const fs = require("fs");

const plugin = require("..");

async function run(input, opts = {}) {
  const row = fs.readFileSync(`./test/fixtures/${input}.css`, "utf8");
  const expected = fs.readFileSync(
    `./test/fixtures/${input}.expected.css`,
    "utf8"
  );
  let result = await postcss([plugin(opts)]).process(row, {
    from: undefined,
  });
  expect(result.css).toEqual(expected);
  expect(result.warnings()).toHaveLength(0);
}

it("delete duplicate css", async () => {
  await run("base", {});
});

it("delete css comment", async () => {
  await run("comment", {
    isRemoveComment: true,
  });
});

it("delete null css", async () => {
  await run("null", {
    isRemoveNull: true,
  });
});
