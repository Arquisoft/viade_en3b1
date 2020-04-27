import ReviewForm from './ReviewForm';

const state = {
  activeStep: 0,
  name: '',
  description: '',
  date: new Date(),
  photos: [],
  videos: [],
  points: []
}

const { activeStep, name, description, date, photos, videos, points } = state;
const values = { activeStep, name, description, date, photos, videos, points };

const handleNext = jest.fn();
const handleBack = jest.fn();
const handleChange = jest.fn();
const handleDateChange = jest.fn();
const handleMediaChange = jest.fn();
const handleMapPoints = jest.fn();
const handleDownload = jest.fn();
const createRoute = jest.fn();

test('Define ReviewForm', () => {
  expect(ReviewForm).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<ReviewForm
    handleNext={handleNext}
    handleBack={handleBack}
    values={values}
    createRoute={createRoute}
/>);
  expect(wrapper).toMatchSnapshot();
});