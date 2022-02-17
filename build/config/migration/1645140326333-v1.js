"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v11645140326333 = void 0;
class v11645140326333 {
    constructor() {
        this.name = 'v11645140326333';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`name\``);
            yield queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`description\``);
            yield queryRunner.query(`ALTER TABLE \`book\` ADD \`title\` varchar(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`book\` ADD \`content\` varchar(255) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`content\``);
            yield queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`title\``);
            yield queryRunner.query(`ALTER TABLE \`book\` ADD \`description\` varchar(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`book\` ADD \`name\` varchar(255) NOT NULL`);
        });
    }
}
exports.v11645140326333 = v11645140326333;
