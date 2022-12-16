
  function Particles__init() {
    tsParticles.load("tsparticles", {
      // 전체 화면 여부
      fullScreen: {
        enable: false
      },
  
      // 배경 관련 옵션
      background: {
        // 색상
      },
      // 인터렉션 관련 옵션
      interactivity: {
        events: {
          // 클릭 시
          onClick: {
            enable: true,
            mode: "push"
          },
          // 호버 시
          onHover: {
            enable: true,
            mode: "repulse"
          },
          // 효과 세부 설정
          modes: {
            push: {
              quantity: 1
            },
            repulse: {
              distance: 400
            }
          }
        }
      },
      // 짱 큰 똥글뱅이
      particles: {
        color: {
          value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
        },
        number: {
          value: 50
        },
        shape: {
          color: "random",
          type: "circle"
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: 400,
          random: {
            enable: true,
            minimumValue: 200
          }
        },
        move: {
          enable: true,
          speed: 4,
          direction: "top"
        }
      }
    });
  }
  
  Particles__init();
  