const CHANGE_FILTER = 'CHANGE_FILTER';

const baseFilter = 'all';

const filtersReducer = (state = baseFilter, action) => {
    switch (action.type) {
      case CHANGE_FILTER: {
        return action.activeFilter;
      }
      default:
        return state;
    }
  }

export const changeFilter = activeFilter => ({type: 'CHANGE_FILTER', activeFilter})


export default filtersReducer;