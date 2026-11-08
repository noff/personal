#!/bin/bash
# Сборка статики и выкладка на mkechinov.com (nginx на сервере pets отдаёт /home/mkechinov/mkechinov.com).
# Без --delete: в папке лежат файлы старого сайта, и их адреса не должны внезапно пропасть.
set -euo pipefail
cd "$(dirname "$0")"

TARGET="${DEPLOY_TARGET:-pets:/home/mkechinov/mkechinov.com/}"

mise install
mise exec -- npm ci
mise exec -- npm run build
rsync -azv dist/ "$TARGET"
