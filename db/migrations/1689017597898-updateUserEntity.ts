import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserEntity1689017597898 implements MigrationInterface {
    name = 'UpdateUserEntity1689017597898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`cellphone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_65964723c91566b00580a6cf22\` (\`cellphone\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`rol\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`rol\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_65964723c91566b00580a6cf22\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`cellphone\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
