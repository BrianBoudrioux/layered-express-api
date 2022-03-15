import {MigrationInterface, QueryRunner} from "typeorm";

export class v31645143182631 implements MigrationInterface {
    name = 'v31645143182631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`author\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`author\``);
    }

}
