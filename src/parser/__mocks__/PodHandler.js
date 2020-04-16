export const mockStoreMedia = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return {storeMedia: mockStoreMedia};
});

export default mock;