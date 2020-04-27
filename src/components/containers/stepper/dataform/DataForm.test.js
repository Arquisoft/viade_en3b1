import DataForm from './DataForm';

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

test('Define DataForm', () => {
  expect(DataForm).toBeDefined();
});

test('Renders correctly', () => {
  // console.log
  const wrapper = render(<DataForm
    handleNext={handleNext}
    handleChange={handleChange}
    handleDateChange={handleDateChange}
    handleMediaChange={handleMediaChange}
    values={values}
  />);
  expect(wrapper).toMatchSnapshot();
});