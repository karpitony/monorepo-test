interface QuestionType {
  question: string;
  answer: string;
}

interface Questions {
  [key: string]: QuestionType[];
}

export const questions: Questions = {
  '공통': [
    {
      question: '신입생/휴학생/대학원생도 활동할 수 있나요?',
      answer: `동국대학교 학부생이라면 신입생, 재학생, 휴학생 관계없이 지원 가능합니다. 
      단, 대학원생의 경우 학부 Farm 활동에 제약이 있습니다. 대학원 Farm에 도전하시길 바랍니다!`
    },
    {
      question: '저는 개발이 처음이고, 실력이 부족한데 지원해도 괜찮을까요?',
      answer: 'FarmSystem은 SW분야에 입문하는 학생들을 위한 Union이 있습니다. 우선 Union에서 열정을 다해주신다면 심화 트랙 과정까지 나아가실 수 있을 겁니다! 지원자님의 성장을 응원합니다!'
    },
    {
      question: '트랙은 어떻게 운영되나요?',
      answer: '총 5개의 트랙은 각 트랙별로 운영진 및 지도교수님이 담당해주시고 계십니다. 트랙별로 커리큘럼 및 운영방식이 다르기 때문에 트랙 소개를 참고하시길 바랍니다.'
    },
    {
      question: 'Farm System에서 어떤 활동을 하게 되나요?',
      answer: 'Farm System에서는 아이디어톤, 해커톤, 이달의 세미나, 부스 운영(전시회) 등 다양한 활동을 진행합니다. 또한 트랙별 프로젝트를 수행하며, 실무 환경과 유사한 협업 경험을 쌓을 수 있습니다.'
    },
    {
      question: '활동을 하면 어떤 혜택이 있나요?',
      answer: 'Farm System 활동을 통해 실전 프로젝트 경험을 쌓고, 포트폴리오를 작성할 수 있습니다. 또한, 우수 프로젝트는 부스 운영 및 연구 기관과 협업할 기회가 주어지며, 네트워킹 및 취업 기회도 확장할 수 있습니다.'
    },
    {
      question: 'Farm System의 트랙은 중복으로 지원할 수 있나요?',
      answer: 'FarmSystem에서 트랙은 1인당 하나의 트랙만 지원 가능합니다. Union에서 5개 트랙으로 가기 위한 지원 시에도 하나의 트랙만 가능하며, 자체 심사가 진행될 예정입니다.'
    },
    {
      question: 'FarmSystem 회비는 얼마인가요?',
      answer: 'FarmSystem의 운영비는 모두 학교에서 지원됩니다. 따라서 회비는 없습니다.'
    },
    {
      question: 'FarmSystem 활동 시기는 언제인가요?',
      answer: '기본적으로 FarmSystem은 1년 동안 활동하게 되며, 매주 월요일 7시 각 세션이 진행됩니다. 학기 수강신청 때 참고 바랍니다.'
    }
  ],
  '게임/영상': [
    {
      question: '게임/영상 트랙에서는 어떤 기술을 배우게 되나요?',
      answer: '게임 개발과 영상 제작에 필요한 기술을 배우게 됩니다. Unity 및 Unreal Engine을 활용한 게임 개발, Blender와 3D MAX를 활용한 2D/3D 디자인, 그리고 컴퓨터 비전 기술(영상 파트 희망자에 한함)까지 폭넓은 내용을 다룹니다.'
    },
    {
      question: '개발 경험이 없어도 지원할 수 있나요?',
      answer: '네! 기초부터 배울 수 있도록 커리큘럼이 구성되어 있으며, 팀 프로젝트 및 스터디를 통해 실무에 가까운 경험을 쌓을 수 있습니다. 개발, 디자인, 영상 편집 등 다양한 분야에서 협업할 기회가 제공됩니다.'
    },
    {
      question: '게임 개발과 영상 제작 중 하나만 선택해서 활동할 수도 있나요?',
      answer: '네, 가능합니다. 트랙 내에서 게임 개발과 영상 제작을 각각 진행할 수 있으며, 원하는 분야를 선택하여 집중적으로 배우고 프로젝트에 참여할 수 있습니다.'
    },
    {
      question: '트랙 내에서 진행하는 프로젝트는 어떤 방식으로 운영되나요?',
      answer: '팀 단위로 구성되어 학기별 프로젝트를 수행하며, 월별 정기 세미나를 통해 진행 상황을 공유하고 피드백을 받습니다. 또한, 여름방학 동안 개인별 클론 코딩 프로젝트를 진행하고, 하반기에는 타 트랙과 협력하여 기업 연계 프로젝트를 수행합니다.'
    },
    {
      question: '프로젝트 결과물을 외부에 공개하거나 발표할 기회가 있나요?',
      answer: '네, 트랙 활동을 통해 개발한 게임 및 영상 콘텐츠는 Farm System 전시회에서 시연하거나, 게임 개발 공모전 및 해커톤에 출품할 수 있습니다. 또한, 우수한 프로젝트는 기업 연계 기회를 제공받을 수도 있습니다.'
    }
  ],
  '보안/웹': [
    {
      question: '보안/웹 트랙에서는 어떤 기술을 배우게 되나요?',
      answer: '웹 개발과 보안 기술을 동시에 학습하며, SW 취약점 분석, 웹 보안 강화, 해킹 및 방어 기법 등을 다룹니다. 또한, 기업 연계 프로젝트를 통해 실무에서 요구하는 보안 기술을 경험할 수 있습니다.'
    },
    {
      question: '개발 경험이 없어도 지원할 수 있나요?',
      answer: '트랙 내 활동에서는 웹 개발 지식이 기초적으로 요구됩니다. 다만, 보안에 관심이 있다면 기초 프로그래밍 지식만 있어도 트랙 내에서 보충 학습이 가능합니다.'
    },
    {
      question: '트랙에서 진행하는 프로젝트는 어떤 방식으로 운영되나요?',
      answer: '트랙에서는 학기별로 보안 및 웹 개발 프로젝트를 수행합니다. 1차 프로젝트에서는 국내 보안 학회 논문을 기반으로 주제를 도출하여 이를 개발한 웹 애플리케이션에 적용합니다. 2차 프로젝트에서는 기업 및 인공지능 트랙과 연계하여 1차 프로젝트를 발전시킵니다.'
    },
    {
      question: '기업 연계 프로그램은 어떻게 진행되나요?',
      answer: '보안/웹 트랙에서는 기업과 협력하여 아이디어톤, 사내 투어, 실무자 멘토링, 기업 연계 프로젝트 등을 진행합니다. 이를 통해 실제 현장에서 활용되는 기술을 익히고, 보안 분야에서의 실무 경험을 쌓을 수 있습니다.'
    },
    {
      question: '프로젝트 결과물을 외부에 공개하거나 발표할 기회가 있나요?',
      answer: '네, 트랙 활동을 통해 개발한 웹 애플리케이션은 Farm System 전시회에서 시연하거나, (외부) 공개 SW 개발자 대회에 출품될 수 있습니다.'
    }
  ],
  '빅데이터': [
    {
      question: '빅데이터 트랙에서는 어떤 기술을 배우게 되나요?',
      answer: `대용량 데이터를 처리하고 분석하는 방법을 배웁니다. SQL, 머신러닝, 데이터 시각화, Elastic Stack(ELK) 등의 기술을 학습하며, 이를 활용하여 데이터 기반 문제 해결 능력을 키울 수 있습니다.`
    },
    {
      question: '빅데이터 트랙에 지원하려면 어떤 역량이 필요한가요?',
      answer: `기본적인 Python 또는 R 활용 능력이 있으면 좋지만, 기초부터 학습할 수 있도록 다양한 스터디와 멘토링 프로그램이 준비되어 있습니다. 데이터 분석, AI, 클라우드 환경에 관심이 있다면 누구나 지원 가능합니다.`
    },
    {
      question: '빅데이터 트랙에서는 어떤 프로젝트를 진행하나요?',
      answer: `Kaggle을 활용한 데이터 분석 실습, 기업 연계 프로젝트(ELK 기반 데이터 분석), 내부 및 외부 공모전 참가, 해커톤 등의 활동을 통해 실무 경험을 쌓을 수 있습니다.`
    },
    {
      question: '기업 연계 프로젝트는 어떻게 진행되나요?',
      answer: `빅데이터 트랙에서는 기업과 협력하여 실제 산업 데이터를 활용한 프로젝트를 진행합니다. ELK 스택을 활용한 데이터 분석, 데이터베이스 설계 및 최적화 등의 실무 경험을 쌓을 수 있으며, 전문가 멘토링도 제공됩니다.`
    },
    {
      question: '프로젝트 결과물을 외부에 발표할 기회가 있나요?',
      answer: `네, 트랙 내 최종 발표회, Farm System 기술 세미나, 해커톤, 팜 전시회 등을 통해 프로젝트를 발표하고 공유할 기회가 주어집니다. 또한, 우수한 프로젝트는 외부 공모전에도 출품할 수 있습니다.`
    }
  ],
  '인공지능': [
    {
      question: '인공지능 트랙에서는 어떤 기술을 배우게 되나요?',
      answer: `최신 AI 기술을 기반으로 머신러닝, 딥러닝, 자연어 처리(NLP), 컴퓨터 비전, 멀티모달 AI 등을 학습합니다. 또한, 모델 배포, 최적화, 서비스 연계 등 실무에서 요구되는 기술을 프로젝트를 통해 익힙니다.`
    },
    {
      question: 'AI 관련 경험이 없어도 지원할 수 있나요?',
      answer: `네! 기본적인 Python 프로그래밍 지식이 있다면 누구나 참여할 수 있습니다. 트랙 내에서 기초부터 차근히 배울 수 있도록 스터디 및 세미나가 준비되어 있으며, 팀 프로젝트를 통해 실전 경험을 쌓을 수 있습니다.`
    },
    {
      question: '트랙 내 프로젝트는 어떤 방식으로 진행되나요?',
      answer: `학기별로 1차 및 2차 프로젝트를 진행합니다. 1차 프로젝트는 자체 기획 프로젝트로 AI 모델을 설계 및 구현하며, 2차 프로젝트는 기업 연계 프로젝트로 실무 환경에서 AI를 적용하는 경험을 제공합니다. 모든 프로젝트는 최종 발표회를 통해 공유됩니다.`
    },
    {
      question: '기업 연계 프로젝트는 어떤 방식으로 운영되나요?',
      answer: `2차 프로젝트(7~12월)에서는 보안/웹 트랙과 협업하여 기업이 제공하는 데이터 및 환경을 기반으로 실제 서비스에서 활용할 수 있는 AI 솔루션을 개발합니다. 이를 통해 실무 경험을 쌓고, 현업에서 요구하는 AI 개발 프로세스를 경험할 수 있습니다.`
    },
    {
      question: '프로젝트 결과물을 외부에 발표할 기회가 있나요?',
      answer: `네, 프로젝트 발표회(6월, 12월), Farm System 세미나, 팜 전시회(12월)를 통해 AI 프로젝트를 발표할 기회가 제공됩니다. 또한, 우수 프로젝트는 대외 공모전 및 경진대회 참가를 지원받을 수 있습니다.`
    }
  ],
  '사물인터넷/로봇': [
    {
      question: '사물인터넷/로봇 트랙에서는 어떤 기술을 배우게 되나요?',
      answer: `IoT 및 로봇 개발에 필요한 다양한 기술을 배우게 됩니다. 센서 네트워크, ROS2 기반 로봇 제어, SLAM, 로봇팔 제어, 자율 주행, 임베디드 시스템 설계 등 실무에서 활용되는 기술을 실습하며 프로젝트 기반으로 학습합니다.`
    },
    {
      question: '로봇이나 임베디드 경험이 없어도 지원할 수 있나요?',
      answer: `네! 처음 배우는 분들도 기초 개념부터 차근히 배울 수 있도록 스터디와 실습을 진행합니다. 기본적인 프로그래밍 경험이 있다면 더욱 쉽게 적응할 수 있으며, 트랙 내 멘토링을 통해 실력을 쌓을 수 있습니다.`
    },
    {
      question: '트랙 내 프로젝트는 어떻게 운영되나요?',
      answer: `트랙에서는 학기별로 프로젝트를 진행하며, 1학기에는 기초 개념 학습 및 실습을 중심으로 준비하고, 여름방학부터 본격적인 팀 프로젝트를 수행합니다. 프로젝트는 기업 연계 및 자율 프로젝트로 진행되며, 팀별로 협업하여 설계, 개발, 테스트를 수행합니다.`
    },
    {
      question: '기업 연계 프로젝트는 어떻게 진행되나요?',
      answer: `트랙에서는 기업과 협력하여 산업에서 실제 활용되는 IoT 및 로봇 기술을 접할 수 있는 기회를 제공합니다. 예를 들어, ELK 스택을 활용한 데이터 수집 및 분석, 로봇 자동화 프로젝트, 스마트 양식장 시스템 개발 등 다양한 기업 연계 프로젝트를 수행할 수 있습니다.`
    },
    {
      question: '프로젝트 결과물을 발표하거나 외부에 공유할 기회가 있나요?',
      answer: `네, 프로젝트 최종 발표회(9월, 11월, 12월)를 통해 트랙원들과 성과를 공유하며, Farm System 팜 전시회에서 프로젝트를 시연할 기회도 제공됩니다. 또한, 우수한 프로젝트는 외부 공모전 및 기업 협업 기회를 통해 더욱 발전시킬 수도 있습니다.`
    }
  ]
};
