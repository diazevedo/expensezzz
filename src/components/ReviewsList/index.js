import React from 'react';

import * as S from './styles';
import Avatar from '../Avatar';

import Star from '../Star';

import belle from '../../assets/images/belle.png';
import travis from '../../assets/images/travis.png';

import reply from '../../assets/icons/reply.svg';

const reviews = [
  {
    id: '01',
    img: belle,
    name: 'Belle Bowen',
    rate: 3,
    description:
      'Now, if you are interested in being the best player, getting really good money and knowing',
  },
  {
    id: '02',
    img: travis,
    name: 'Travis Miller',
    rate: 2,
    description:
      'Now, if you are interested in being the best player, getting really good money and knowing',
  },
];

const ReviewsList = () => {
  const startAmount = [0, 1, 2, 3, 4];

  return (
    <S.List>
      {reviews.map(({ id, img, name, rate, description }) => (
        <li key={id}>
          <S.HeaderItem>
            <Avatar img={img} alt={name} />

            <S.Details>
              <p>{name}</p>
              {startAmount.map((item) => (
                <Star key={item.toString()} full={item < rate} />
              ))}
            </S.Details>
          </S.HeaderItem>
          <p>{description}</p>
          <S.ReplyButton>
            <img src={reply} alt="Reply" />
            <span>Reply</span>
          </S.ReplyButton>
        </li>
      ))}
    </S.List>
  );
};

export default ReviewsList;
