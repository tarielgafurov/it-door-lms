import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styled from 'styled-components';

Chart.register(...registerables);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Name = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Email = styled.h2`
  font-size: 18px;
  font-weight: initial;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ProgressSection = styled.div`
  width: 100%;
  max-width: 400px;

    @media (max-width: 768px) {
      max-width: 300px;
    }
`;

const ProgressBarContainer = styled.div`
  margin-bottom: 15px;
  height: 300px;
`;

const Profile = ({ profiles }) => {
  return profiles.map((profile, index) => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          type: 'linear'
        }
      }
    };

    return (
      <Container key={index}>
        <ProfileImage src={profile.imageUrl} alt="Profile" />
        <Name>{profile.name}</Name>
        <Email>{profile.email}</Email>
        <ProgressSection>
          <hr />
          <ProgressBarContainer>
            <Bar
              data={{
                labels: profile.progress.labels,
                datasets: [{
                  label: 'Процент %',
                  data: profile.progress.data,
                  backgroundColor: profile.progress.backgroundColor
                }]
              }}
              options={options}
            />
          </ProgressBarContainer>
        </ProgressSection>
      </Container>
    );
  });
};

export default Profile;
