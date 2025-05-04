#!/bin/bash

# 스크립트 이름: concat.sh
# 기능: 현재 디렉토리의 'page_*.html' 파일들을 찾아서 내용을 'combined_slides.txt' 파일 하나로 합칩니다.

OUTPUT_FILE="combined_slides.txt"
SOURCE_FILES="*.html"

echo "'${SOURCE_FILES}' 파일들을 '${OUTPUT_FILE}' 파일로 합치는 작업을 시작합니다..."

# 기존 출력 파일이 있다면 덮어쓰기 전에 삭제 (선택사항)
# rm -f "$OUTPUT_FILE"

# cat 명령어를 사용하여 파일 내용을 합치고 리디렉션(>)으로 새 파일 생성
# 따옴표 없이 SOURCE_FILES를 사용하면 셸이 와일드카드(*)를 확장하여 파일 목록을 전달합니다.
cat $SOURCE_FILES > "$OUTPUT_FILE"

# 작업 완료 확인
if [ $? -eq 0 ]; then
  echo "성공: 모든 내용이 '${OUTPUT_FILE}' 파일에 저장되었습니다."
  echo "생성된 파일 크기: $(wc -c < "$OUTPUT_FILE") 바이트"
else
  echo "오류: 파일 합치기 작업 중 문제가 발생했습니다."
  exit 1
fi

exit 0