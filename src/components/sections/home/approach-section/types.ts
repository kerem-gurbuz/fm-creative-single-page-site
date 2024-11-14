type ApproachStep = {
  id: string;
  number: number;
  title: string;
  description: string;
};

type ApproachData = {
  steps: ApproachStep[];
};

export type { ApproachData, ApproachStep };
