import React, { Component } from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
// import LifeCycleComponent from '../LifeCylcleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
	// state = {
	// 	showComponent: true
	// };

	// componentDidMount() {}

	render() {
		return (
			<div>
				{/* <h5>YouTube Component </h5>
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
				<YouTubeComp /> */}
				{/* <h1>LifeCycle Component</h1>
				<hr />
				{this.state.showComponent ? <LifeCycleComponent /> : null}

				<br />
				<br /> */}
				{/* <h1>Counter</h1>
				<hr />
				<Product /> */}
				<h1>Interaksi Dengan Back-end</h1>
				<hr />

				<BlogPost />
			</div>
		);
	}
}

export default Home;
