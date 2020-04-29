import Media from "../../entities/Media";
import MyCarousel from "./MyCarousel";
import photo from '../../assets/img/fondo/city_1.jpg';
import photo2 from '../../assets/img/fondo/city_2.jpg';

var media = [new Media(photo), new Media(photo2)];

test('Define MyCarousel', () => {
    expect(MyCarousel).toBeDefined();
});

test('Renders correctly', () => {
    const wrapper = render(<MyCarousel photos={media} />);
    expect(wrapper).toMatchSnapshot();
});