// navigation.js

document.addEventListener('DOMContentLoaded', () => {
    // 슬라이드 파일 목록 (파일명 및 순서가 정확해야 함)
    const slides = [
        '01_표지_에듀테크_핵심_역량개발_가이드라인.html',
        '02_목차.html',
        '03_필요성_AI시대_에듀테크_HRD_역할.html',
        '04_가이드라인_리터러시_진단과_통합교육.html',
        '05_가이드라인_비판적사고와_직무별_활용학습.html',
        '06_가이드라인_실습환경과_지속학습.html',
        '07_가이드라인_성과연계와_HRD역량.html',
        '08_참고문헌.html',
        '09_마무리_감사합니다.html'
    ];

    // 현재 페이지 파일명 가져오기 (URL 경로에서 마지막 부분 추출)
    const currentPath = window.location.pathname;
    // URL 인코딩된 문자를 디코딩 (한글 파일명 등 처리)
    const currentPage = decodeURIComponent(currentPath.substring(currentPath.lastIndexOf('/') + 1));

    // 현재 페이지의 인덱스 찾기
    const currentIndex = slides.indexOf(currentPage);

    // 현재 페이지가 목록에 없으면 아무것도 안 함
    if (currentIndex === -1) {
        console.error("현재 슬라이드를 목록에서 찾을 수 없습니다:", currentPage);
        return;
    }

    // 이전/다음 페이지 인덱스 계산
    const prevIndex = currentIndex - 1;
    const nextIndex = currentIndex + 1;

    // 이전/다음 페이지 파일명 결정 (범위를 벗어나면 null)
    const prevPage = prevIndex >= 0 ? slides[prevIndex] : null;
    const nextPage = nextIndex < slides.length ? slides[nextIndex] : null;

    // 네비게이션 UI 생성
    const navContainer = document.createElement('div');
    navContainer.className = 'slide-navigation'; // CSS 스타일링을 위한 클래스

    // '이전' 버튼/링크 생성
    if (prevPage) {
        const prevLink = document.createElement('a');
        prevLink.href = prevPage;
        prevLink.className = 'nav-button prev';
        prevLink.innerHTML = '<i class="fas fa-arrow-left"></i> 이전';
        navContainer.appendChild(prevLink);
    } else {
        // 첫 페이지일 경우 비활성화된 버튼 표시 (선택 사항)
        const prevPlaceholder = document.createElement('span');
        prevPlaceholder.className = 'nav-button prev disabled';
        prevPlaceholder.innerHTML = '<i class="fas fa-arrow-left"></i> 이전';
        navContainer.appendChild(prevPlaceholder);
    }

    // '다음' 버튼/링크 생성
    if (nextPage) {
        const nextLink = document.createElement('a');
        nextLink.href = nextPage;
        nextLink.className = 'nav-button next';
        nextLink.innerHTML = '다음 <i class="fas fa-arrow-right"></i>';
        navContainer.appendChild(nextLink);
    } else {
        // 마지막 페이지일 경우 비활성화된 버튼 표시 (선택 사항)
        const nextPlaceholder = document.createElement('span');
        nextPlaceholder.className = 'nav-button next disabled';
        nextPlaceholder.innerHTML = '다음 <i class="fas fa-arrow-right"></i>';
        navContainer.appendChild(nextPlaceholder);
    }

    // 생성된 네비게이션 UI를 body 끝에 추가
    document.body.appendChild(navContainer);

    // --- 키보드 네비게이션 ---
    document.addEventListener('keydown', (event) => {
        // 왼쪽 화살표 클릭 시 이전 페이지로 (이전 페이지가 있을 경우)
        if (event.key === 'ArrowLeft' && prevPage) {
            window.location.href = prevPage;
        }
        // 오른쪽 화살표 클릭 시 다음 페이지로 (다음 페이지가 있을 경우)
        else if (event.key === 'ArrowRight' && nextPage) {
            window.location.href = nextPage;
        }
    });
});
