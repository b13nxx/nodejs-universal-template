/**
 * @see {@link https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type}
 *
 * - feat: A new feature
 * - fix: A bug fix
 * - docs: Documentation only changes
 * - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 * - refactor: A code change that neither fixes a bug nor adds a feature
 * - perf: A code change that improves performance
 * - test: Adding missing or correcting existing tests
 * - build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
 * - ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
 * - chore: Other changes that don't modify src or test files
 * - revert: Reverts a previous commit
 */

module.exports = {
  extends: ['@commitlint/config-conventional']
}
