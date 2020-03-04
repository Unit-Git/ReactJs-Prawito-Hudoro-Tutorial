import React, { Component } from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';

class Home extends Component {
	render() {
		return (
			<div>
				<p>YouTube Component </p>
				<hr />
				<YouTubeComp
					time='5.04'
					title='Pengenalan ReactJS #1 ReactJS Tutorial [Indonesia]'
					desc='23rb x ditonton
                    1 tahun lalu'
				/>
				<YouTubeComp
					time='16.32'
					title='Simple Component #2 ReactJS Tutorial [Indonesia]'
					desc='10rb x ditonton
                    1 tahun lalu'
				/>
				<YouTubeComp
					time='7.17'
					title='Add React To existing Project #3 ReactJS Tutorial '
					desc='7,1rb x ditonton
                    1 tahun lalu'
				/>
				<YouTubeComp
					time='9.06'
					title='Membuat Project React dengan create react app #4 '
					desc='7,1 rb x ditonton
                    1 tahun lalu'
				/>
				<YouTubeComp />
			</div>
		);
	}
}

export default Home;
