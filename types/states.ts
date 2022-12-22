export type tableStyle = {
  id?: string;
  tableName: string;
  capability: string;
  isReserved?: boolean;
  position: string;
  isRounded: boolean;
  isUnReservable?: boolean;
};

export type cellType = {
  startCell: number;
  endCell: number;
};

export type showDetailsState = {
  id: string;
  isShow: boolean;
};
