// NOTICE: This file is generated by Rollup. To modify it,
// please instead edit the ESM counterpart and rebuild with Rollup (npm run build).
'use strict';

class NoFilesFoundError extends Error {
	/**
	 * @param {string|string[]} fileList
	 */
	constructor(fileList) {
		super();

		if (typeof fileList === 'string') {
			fileList = [fileList];
		}

		const pattern = fileList.filter((i) => !i.startsWith('!')).join(', ');

		this.message = `No files matching the pattern "${pattern}" were found.`;
	}
}

module.exports = NoFilesFoundError;
