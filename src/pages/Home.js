import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import ArrowRight from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import useApiData from '../hooks/useApiData';
import { getCountAll } from '../api/statistics';

const wrapperStyle = css`
  display: flex;
  > div {
    flex: 1;
    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`;

const buttonStyle = css`
  float: right;
`;

const Home = () => {
  const [data] = useApiData(getCountAll(), []);

  return (
    <div className={wrapperStyle}>
      {data.map(({ label, count, redirect }) => (
        <Card raised key={label}>
          <CardContent>
            <Typography color="textSecondary" variant="h4" gutterBottom>
              {label}
            </Typography>
            <Typography variant="h3">{count}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              component={Link}
              to={redirect}
              className={buttonStyle}
            >
              Toată lista <ArrowRight />
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Home;
