-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL DEFAULT 'ai-mentor-guest',
    `telegramId` BIGINT NOT NULL,
    `tokens` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `users_telegramId_key`(`telegramId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
