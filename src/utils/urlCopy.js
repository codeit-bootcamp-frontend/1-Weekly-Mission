
export const handleCopyClipBoard = async (name, share) => {
    const host = `${window.location.protocol}//${window.location.host}/shared?user=${share.id}&folder=${share.folderId}`
    const IMAGE_URL = `${window.location.protocol}//${window.location.host}/img/png/image25.png`
    if(name === '링크') {
        try {
            await navigator.clipboard.writeText(host);
            alert("클립보드에 링크가 복사되었어요.");
        } catch (err) {
            console.log(err);
        }
    } else if(name === '카카오톡') {
        if (window.Kakao) {
            const kakao = window.Kakao;
            console.log(kakao)
            if (!kakao.isInitialized()) {
              kakao.init("a7fd2ee661c666142a5dce27caa6c4c5");
            }
        
            kakao.Share.sendDefault({
              objectType: "feed",
              content: {
                title: "Linkbrary", 
                description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요", 
                imageUrl: IMAGE_URL,
                link: {
                  mobileWebUrl: host, 
                  webUrl: host
                }
              },
              buttons: [
                {
                  title: "보러가기",
                  link: {
                    mobileWebUrl: host,
                    webUrl: host
                  }
                }
              ]
            });
          }
    } else {
        const sharedLink = encodeURIComponent(host);
        window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
    }
    
};