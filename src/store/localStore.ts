import { create } from 'zustand';

// type IChoosenLocal = {
//   localId: number[];
//   addToChoosen: (id: number) => void;
//   removeFromChoosen: (id: number) => void;
// };

// const useLocalStore = create<IChoosenLocal>(set => ({
//   localId: [],
//   addToChoosen: (choosenId: number) => {
//     set(state => ({
//       localId: [...state.localId, choosenId],
//     }));
//   },
//   removeFromChoosen: (choosenId: number) => {
//     set(state => ({
//       localId: state.localId.filter(id => id != choosenId),
//     }));
//   },
// }));

// export default useLocalStore;

type IUser = {
  barber: {
    name: string;
  }[];
};

const useStore = create<IUser>(set => ({
  barber: [{ name: 'João paulo' }],
}));

export default useStore;
