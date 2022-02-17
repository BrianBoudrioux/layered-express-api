import {MigrationInterface, QueryRunner} from "typeorm";

export class v11645140326333 implements MigrationInterface {
    name = 'v11645140326333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`content\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`name\` varchar(255) NOT NULL`);
    }

}
