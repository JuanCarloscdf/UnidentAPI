import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingUser1690205991144 implements MigrationInterface {
    name = 'UpdatingUser1690205991144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`image\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`image\``);
    }

}
