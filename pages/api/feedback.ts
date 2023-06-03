import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  corrector: string;
  corrected: string;
  finalMark: number;
  comment: string;
  feedback: string;
  flag: boolean;
  projectName: string;
  createdAt: string;
  pid: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      corrector: 'sungwook',
      corrected: 'seonghwc',
      finalMark: 80,
      comment:
        '아직 진행하시지 않은 과제인데 내용에 대해서 잘 알고 계셨습니다. 그리고 코드 중간중간 질문을 해주셔서 해당부분 설명해 드리면서 코드 설명도 더 잘 이루어질 수 있었던 것 같습니다. 주말 저녁인데 고생많으셨습니다. 감사합니다!',
      feedback:
        '깔끔한 코드의 필로소퍼 과제를 평가하게 되었습니다. print, start, time, die 등 조건에 따른 뮤텍스를 잘 걸어주셔서 출력이 밀리지 않고 잘 뽑히는 것을 확인할 수 있었습니다. norm, leaks 전부 확인했는데 이상이 없어서 통과드립니다! 블랙홀 얼마 안남으셨던데 화이팅하세요!',
      flag: true,
      projectName: 'philosopher',
      createdAt: '2021-10-16T13:00:00.000Z',
      pid: 1245,
    },
    {
      corrector: 'sungwook',
      corrected: 'seonghwc',
      finalMark: 80,
      comment:
        '아직 진행하시지 않은 과제인데 내용에 대해서 잘 알고 계셨습니다. 그리고 코드 중간중간 질문을 해주셔서 해당부분 설명해 드리면서 코드 설명도 더 잘 이루어질 수 있었던 것 같습니다. 주말 저녁인데 고생많으셨습니다. 감사합니다!',
      feedback:
        '깔끔한 코드의 필로소퍼 과제를 평가하게 되었습니다. print, start, time, die 등 조건에 따른 뮤텍스를 잘 걸어주셔서 출력이 밀리지 않고 잘 뽑히는 것을 확인할 수 있었습니다. norm, leaks 전부 확인했는데 이상이 없어서 통과드립니다! 블랙홀 얼마 안남으셨던데 화이팅하세요!',
      flag: true,
      projectName: 'philosopher',
      createdAt: '2021-10-16T13:00:00.000Z',
      pid: 1245,
    },
  ]);
}
