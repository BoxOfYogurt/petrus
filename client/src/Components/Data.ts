export const colors = {
	Phthalo_Green: "#11270b",
	Space_Cadet: "#21295c",
	Coral: "#ff7f51",
	Steel_Teal: "#5b7b7a",
	Platinum: "#ebebeb",
	Russian_Violet: "#390040",
	Patriarch: "#730071",
	Crimson: "#d7263d",
	Oxford_Blue: "#011638",
	Yellow_Green_Crayola: "#ceec97",
	default: "#21295c",
};

export enum StatusLevel {
	Asap = 0,
	Urgent = 1,
	Important = 2,
	Regular = 3,
	Optional = 4,
}
export interface TaskInterface {
	id: string;
	task_title: string;
	task_description: string;
	task_tag: string;
	completed: boolean;
	status_level: StatusLevel;
	start_date: string;
	end_date: string;
}
export interface SubCategoryInterface {
	id: string;
	sub_category_title: string;
	tasks: TaskInterface[];
}
export interface ProjectInterface {
	id: string;
	project_title: string;
	project_description: string;
	sub_categories: SubCategoryInterface[];
}
export interface CategoryInterface {
	id: string;
	color_code: string;
	category_title: string;
	projects: ProjectInterface[];
}

export const Data: CategoryInterface[] = [
	{
		id: "ad092691-df8d-4c2e-9eb1-8dac497a1ce3",
		color_code: "#8d82c2",
		category_title: "Health Care For Some People in United",
		projects: [
			{
				id: "67d9f6de-418e-4dde-9d15-81a5b508edd1",
				project_title: "Namfix",
				project_description:
					"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
				sub_categories: [
					{
						id: "52976fbc-f61e-497f-93bc-388d9fb402c0",
						sub_category_title: "Design",
						tasks: [
							{
								id: "a4c48cd8-e5c2-417c-85b7-58c8b9db7e37",
								task_title: "Should End Today at 2021-03-02",
								task_description:
									"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
								task_tag: "knowledge user",
								completed: false,
								status_level: 4,
								start_date: "2021-02-06T18:37:43Z",
								end_date: "2021-03-02T03:35:13.486Z",
							},
							{
								id: "014075b6-6dbd-49db-a898-499f073d948f",
								task_title: "non quam nec dui luctus",
								task_description:
									"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
								task_tag: "analyzer",
								completed: false,
								status_level: 3,
								start_date: "2021-02-06T18:37:43Z",
								end_date: "2021-03-10T16:29:42Z",
							},
						],
					},
					{
						id: "470f5079-74eb-4499-a812-147c44632e4d",
						sub_category_title: "Marketing",
						tasks: [
							{
								id: "b0475961-0999-4097-8b60-cf4fdf51b6a6",
								task_title: "massa volutpat convallis morbi odio",
								task_description:
									"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
								task_tag: "Grass-roots",
								completed: true,
								status_level: 4,
								start_date: "2021-01-19T00:30:27Z",
								end_date: "2022-02-27T07:56:33Z",
							},
							{
								id: "7e1d67bb-0fe8-4933-8d26-d51ef4e36c3a",
								task_title: "a libero nam dui proin",
								task_description:
									"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
								task_tag: "human-resource",
								completed: false,
								status_level: 0,
								start_date: "2021-01-16T04:10:09Z",
								end_date: "2022-02-26T09:40:48Z",
							},
							{
								id: "c81fcc6c-1dea-4252-a35d-23b4afba5cd6",
								task_title: "hac habitasse platea dictumst",
								task_description:
									"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
								task_tag: "multi-state",
								completed: true,
								status_level: 2,
								start_date: "2021-02-19T04:46:16Z",
								end_date: "2021-05-27T02:48:46Z",
							},
							{
								id: "c185f43f-3e71-4653-989d-bbb67cec2c44",
								task_title: "viverra pede ac",
								task_description:
									"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
								task_tag: "open system",
								completed: false,
								status_level: 3,
								start_date: "2021-01-06T08:19:11Z",
								end_date: "2021-12-14T00:52:38Z",
							},
							{
								id: "370ac9e0-7ff5-40d2-9c73-a07b3d072643",
								task_title: "aliquam augue quam sollicitudin",
								task_description:
									"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
								task_tag: "encoding",
								completed: false,
								status_level: 2,
								start_date: "2021-02-19T09:41:07Z",
								end_date: "2021-09-07T09:33:05Z",
							},
							{
								id: "65f55cf8-b876-4dad-8020-6b5b455b95d7",
								task_title: "vehicula condimentum curabitur",
								task_description:
									"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
								task_tag: "application",
								completed: true,
								status_level: 1,
								start_date: "2021-01-08T15:47:35Z",
								end_date: "2021-09-30T12:38:44Z",
							},
						],
					},
					{
						id: "bf61077c-66cf-484b-b9a1-c6c7eb687171",
						sub_category_title: "Services",
						tasks: [
							{
								id: "ba90b537-093b-4cd6-b5bc-d4c1618c5dca",
								task_title: "ullamcorper augue a suscipit",
								task_description:
									"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
								task_tag: "Face to face",
								completed: false,
								status_level: 4,
								start_date: "2021-02-08T01:45:26Z",
								end_date: "2021-08-02T22:38:27Z",
							},
							{
								id: "36a93fa1-f683-472a-9f12-27cfa20dbcec",
								task_title: "in faucibus orci luctus",
								task_description:
									"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
								task_tag: "national",
								completed: true,
								status_level: 3,
								start_date: "2021-01-15T15:08:26Z",
								end_date: "2022-04-24T21:24:53Z",
							},
							{
								id: "db44116b-83ba-4633-b143-ea2a1f9354ac",
								task_title: "dapibus nulla suscipit ligula in",
								task_description:
									"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
								task_tag: "tangible",
								completed: false,
								status_level: 2,
								start_date: "2021-02-09T15:48:49Z",
								end_date: "2022-05-04T18:29:41Z",
							},
							{
								id: "6482816b-4703-4e35-8015-2a8ea5f6d700",
								task_title: "cubilia curae duis faucibus accumsan",
								task_description:
									"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
								task_tag: "task-force",
								completed: false,
								status_level: 2,
								start_date: "2021-01-26T06:45:16Z",
								end_date: "2021-01-17T06:47:52Z",
							},
							{
								id: "c8c1082d-4046-40ee-bc64-2c2d71a4b2bf",
								task_title: "odio odio elementum",
								task_description:
									"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
								task_tag: "Optional",
								completed: true,
								status_level: 2,
								start_date: "2021-01-18T19:20:01Z",
								end_date: "2021-06-13T19:57:06Z",
							},
							{
								id: "1d175b51-3012-488f-8e1d-5c40999150d5",
								task_title: "orci luctus et ultrices",
								task_description:
									"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
								task_tag: "extranet",
								completed: false,
								status_level: 3,
								start_date: "2021-02-18T10:18:08Z",
								end_date: "2022-03-26T07:05:30Z",
							},
						],
					},
					{
						id: "b6e994cb-b964-4b3d-aa55-80897247f154",
						sub_category_title: "Business Development",
						tasks: [
							{
								id: "347f4c55-5982-4ef0-991f-3bfca67ed90e",
								task_title: "non mauris morbi non lectus",
								task_description:
									"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
								task_tag: "installation",
								completed: false,
								status_level: 0,
								start_date: "2021-01-02T11:59:51Z",
								end_date: "2022-02-23T11:39:53Z",
							},
							{
								id: "75543659-48e8-4dd8-ab92-ec99dbb8ba2f",
								task_title: "amet consectetuer adipiscing elit",
								task_description:
									"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
								task_tag: "Graphic Interface",
								completed: false,
								status_level: 2,
								start_date: "2021-02-02T13:39:44Z",
								end_date: "2021-09-27T01:48:48Z",
							},
						],
					},
				],
			},
		],
	},
	{
		id: "5bb58c4f-7b9c-4235-8d0b-731fbe612e79",
		color_code: "#1eab2e",
		category_title: "Technology",
		projects: [
			{
				id: "ac2c0f45-5d42-4f57-a623-543d0ac223e0",
				project_title: "Solarbreeze",
				project_description:
					"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
				sub_categories: [
					{
						id: "595a57cd-de33-49e6-9d80-35101c0b2d8a",
						sub_category_title: "Training",
						tasks: [
							{
								id: "a16c46a9-bbc7-43fb-8ed2-43ac5290efea",
								task_title: "diam vitae quam",
								task_description:
									"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
								task_tag: "neural-net",
								completed: false,
								status_level: 2,
								start_date: "2021-02-18T19:28:12Z",
								end_date: "2022-03-23T21:52:38Z",
							},
							{
								id: "9bce69d6-9438-4999-b99d-e2c90286e0d1",
								task_title: "dui nec nisi volutpat",
								task_description:
									"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
								task_tag: "challenge",
								completed: true,
								status_level: 2,
								start_date: "2021-01-28T14:28:33Z",
								end_date: "2021-03-12T21:45:51Z",
							},
							{
								id: "bdd7080a-2727-4bac-9201-99a9c6be6d64",
								task_title: "nec nisi vulputate",
								task_description:
									"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
								task_tag: "Switchable",
								completed: true,
								status_level: 2,
								start_date: "2021-01-11T18:27:48Z",
								end_date: "2021-04-23T06:10:41Z",
							},
							{
								id: "492b4121-c6f8-4723-a6d7-565cb1535327",
								task_title: "enim in tempor turpis",
								task_description:
									"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
								task_tag: "Networked",
								completed: false,
								status_level: 4,
								start_date: "2021-02-12T18:13:54Z",
								end_date: "2021-08-08T00:18:09Z",
							},
						],
					},
					{
						id: "7fef5a7a-f7af-45cc-a949-86a65b386b5e",
						sub_category_title: "Legal",
						tasks: [
							{
								id: "04af84b6-6b39-4eb1-aefa-427dda1b3458",
								task_title: "augue aliquam erat volutpat",
								task_description:
									"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
								task_tag: "functionalities",
								completed: false,
								status_level: 0,
								start_date: "2021-02-07T19:23:19Z",
								end_date: "2021-02-05T00:00:01Z",
							},
							{
								id: "1549af49-423d-4173-b465-5a32d574b400",
								task_title: "sit amet diam in magna",
								task_description:
									"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
								task_tag: "Balanced",
								completed: true,
								status_level: 3,
								start_date: "2021-02-15T20:43:52Z",
								end_date: "2021-07-09T03:53:02Z",
							},
							{
								id: "c696e9f0-21d9-41be-b404-b000b01e5976",
								task_title: "arcu sed augue",
								task_description:
									"Sed ante. Vivamus tortor. Duis mattis egestas metus.",
								task_tag: "3rd generation",
								completed: true,
								status_level: 3,
								start_date: "2021-02-19T13:44:35Z",
								end_date: "2021-08-28T03:30:09Z",
							},
							{
								id: "4ba3908a-1f3b-4458-a917-17c94a84b172",
								task_title: "mi pede malesuada",
								task_description:
									"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
								task_tag: "multi-state",
								completed: false,
								status_level: 3,
								start_date: "2021-01-12T10:14:07Z",
								end_date: "2021-01-30T04:19:18Z",
							},
						],
					},
					{
						id: "4e8f0ad7-2196-4f33-8414-90953ad80d09",
						sub_category_title: "Accounting",
						tasks: [
							{
								id: "707d6352-b50c-4a30-b444-ef818b15099f",
								task_title: "quis libero nullam",
								task_description:
									"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
								task_tag: "Cross-group",
								completed: true,
								status_level: 0,
								start_date: "2021-01-15T04:54:31Z",
								end_date: "2021-10-14T05:59:46Z",
							},
							{
								id: "30b893b2-6570-486e-adaa-831e3b7a8ddf",
								task_title: "nulla integer pede justo",
								task_description:
									"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
								task_tag: "coherent",
								completed: false,
								status_level: 2,
								start_date: "2021-01-26T05:58:04Z",
								end_date: "2021-11-12T17:28:51Z",
							},
							{
								id: "c75d6831-e7d9-4639-b43a-004615667f2a",
								task_title: "lorem integer tincidunt",
								task_description:
									"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
								task_tag: "budgetary management",
								completed: true,
								status_level: 3,
								start_date: "2021-01-05T06:13:07Z",
								end_date: "2021-03-18T16:03:34Z",
							},
							{
								id: "6c9327b3-d8bf-4e6f-bc08-de35a39ac70a",
								task_title: "augue luctus tincidunt",
								task_description:
									"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
								task_tag: "Multi-layered",
								completed: true,
								status_level: 2,
								start_date: "2021-02-01T14:40:23Z",
								end_date: "2021-04-23T11:17:16Z",
							},
							{
								id: "e737a79e-61e0-44eb-80ef-cd897f35f966",
								task_title: "tempor turpis nec euismod scelerisque",
								task_description:
									"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
								task_tag: "task-force",
								completed: false,
								status_level: 3,
								start_date: "2021-01-31T19:14:33Z",
								end_date: "2022-04-08T20:43:06Z",
							},
							{
								id: "8848bc10-b2ec-4bc5-bd05-7b779ee3e4ff",
								task_title: "vulputate vitae nisl aenean lectus",
								task_description:
									"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
								task_tag: "explicit",
								completed: true,
								status_level: 0,
								start_date: "2021-01-23T09:20:02Z",
								end_date: "2021-12-18T08:33:39Z",
							},
						],
					},
					{
						id: "32d2632a-5d74-4935-b1c2-6645e9a191b7",
						sub_category_title: "Services",
						tasks: [
							{
								id: "cfeb69c8-28f5-485b-85e4-7133a2174bfe",
								task_title: "condimentum neque sapien placerat ante",
								task_description:
									"Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
								task_tag: "leading edge",
								completed: true,
								status_level: 3,
								start_date: "2021-01-21T14:04:32Z",
								end_date: "2021-07-06T00:44:04Z",
							},
							{
								id: "d2917965-5618-4ffd-b881-a464b3c29ba5",
								task_title: "viverra eget congue",
								task_description:
									"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
								task_tag: "zero tolerance",
								completed: false,
								status_level: 0,
								start_date: "2021-01-05T10:54:37Z",
								end_date: "2021-03-23T13:28:20Z",
							},
							{
								id: "b6578f62-eb4c-440b-aa9a-798d4dc7f78c",
								task_title: "mattis egestas metus",
								task_description:
									"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
								task_tag: "Polarised",
								completed: false,
								status_level: 1,
								start_date: "2021-01-20T00:20:06Z",
								end_date: "2022-03-31T03:38:49Z",
							},
							{
								id: "ab2e86d4-8e2d-420f-a864-a491c16fb9eb",
								task_title: "id sapien in sapien",
								task_description:
									"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
								task_tag: "homogeneous",
								completed: true,
								status_level: 3,
								start_date: "2021-02-20T05:37:13Z",
								end_date: "2021-04-04T02:05:05Z",
							},
						],
					},
					{
						id: "bd38ad6f-cd98-458b-8bab-e4ba2781b38c",
						sub_category_title: "Product Management",
						tasks: [
							{
								id: "ba75e263-0cf5-43a6-bf83-b66d96f6854a",
								task_title: "justo morbi ut odio cras",
								task_description:
									"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
								task_tag: "Self-enabling",
								completed: false,
								status_level: 2,
								start_date: "2021-02-03T12:51:23Z",
								end_date: "2021-01-04T04:04:26Z",
							},
							{
								id: "d567c3c3-f963-4b75-b152-47ac8e01f385",
								task_title: "pede venenatis non sodales sed",
								task_description:
									"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
								task_tag: "De-engineered",
								completed: true,
								status_level: 1,
								start_date: "2021-01-03T04:21:55Z",
								end_date: "2021-09-22T06:09:45Z",
							},
							{
								id: "5f3f6434-de78-4555-a41c-564c32e1cadb",
								task_title: "tincidunt eu felis fusce",
								task_description:
									"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
								task_tag: "high-level",
								completed: false,
								status_level: 3,
								start_date: "2021-02-17T08:44:28Z",
								end_date: "2022-03-03T16:17:41Z",
							},
							{
								id: "eee5111f-1b96-4774-b876-8fb99c3d55c6",
								task_title: "in hac habitasse platea",
								task_description:
									"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
								task_tag: "incremental",
								completed: true,
								status_level: 1,
								start_date: "2021-01-10T02:46:55Z",
								end_date: "2021-02-13T09:33:16Z",
							},
							{
								id: "f6fe5870-bfe7-4718-8485-a45e0e37ea6f",
								task_title: "quam pede lobortis ligula",
								task_description:
									"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
								task_tag: "multi-tasking",
								completed: false,
								status_level: 2,
								start_date: "2021-01-18T00:19:49Z",
								end_date: "2021-12-06T20:58:37Z",
							},
							{
								id: "2d5c561f-149c-4da5-9240-b1c1d9aa3a5f",
								task_title: "nunc purus phasellus",
								task_description:
									"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
								task_tag: "human-resource",
								completed: true,
								status_level: 2,
								start_date: "2021-01-18T08:30:44Z",
								end_date: "2021-01-31T20:30:44Z",
							},
						],
					},
				],
			},
			{
				id: "90c8a2c4-71dc-40ed-828b-60719a74ddbd",
				project_title: "Flexidy",
				project_description:
					"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
				sub_categories: [
					{
						id: "9bf5942f-a85f-41f1-b73e-c88add8379f8",
						sub_category_title: "Research and Development",
						tasks: [
							{
								id: "c6d4e380-42cf-4b68-bb96-9410136a6b3c",
								task_title: "ut suscipit a",
								task_description:
									"In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
								task_tag: "Versatile",
								completed: true,
								status_level: 3,
								start_date: "2021-01-05T00:14:16Z",
								end_date: "2021-08-08T12:00:18Z",
							},
							{
								id: "841b1ee1-dc9c-4362-80ce-21100402601c",
								task_title: "erat eros viverra",
								task_description:
									"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
								task_tag: "Ameliorated",
								completed: false,
								status_level: 3,
								start_date: "2021-02-08T06:57:34Z",
								end_date: "2022-01-03T10:39:25Z",
							},
							{
								id: "035bf820-d567-4e07-a982-8dfc58e8b4c7",
								task_title: "elementum nullam varius",
								task_description:
									"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
								task_tag: "Versatile",
								completed: false,
								status_level: 2,
								start_date: "2021-01-22T15:54:26Z",
								end_date: "2021-05-02T04:22:24Z",
							},
							{
								id: "5f5109e6-0c68-4e8c-97f3-2bacc247a654",
								task_title: "nisl duis bibendum",
								task_description:
									"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
								task_tag: "Horizontal",
								completed: true,
								status_level: 4,
								start_date: "2021-02-08T11:01:30Z",
								end_date: "2021-07-10T12:28:29Z",
							},
							{
								id: "92b4c0c6-0a5d-40dc-8c81-af9af991ffd8",
								task_title: "nam nulla integer pede",
								task_description:
									"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
								task_tag: "Up-sized",
								completed: true,
								status_level: 1,
								start_date: "2021-02-05T12:18:12Z",
								end_date: "2021-08-24T21:28:41Z",
							},
						],
					},
					{
						id: "74cc14a8-8027-404a-a727-2d24a4edf91b",
						sub_category_title: "Sales",
						tasks: [
							{
								id: "143a6400-53a5-4d11-bf91-4eb20c5a6494",
								task_title: "lorem integer tincidunt ante vel",
								task_description:
									"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
								task_tag: "Public-key",
								completed: false,
								status_level: 1,
								start_date: "2021-01-20T23:47:23Z",
								end_date: "2021-02-09T17:50:39Z",
							},
						],
					},
					{
						id: "e048af48-05f8-447e-ac93-954be04264b1",
						sub_category_title: "Business Development",
						tasks: [
							{
								id: "16c5fe3e-77ac-48af-8e98-73ebec263e8f",
								task_title: "consequat morbi a",
								task_description:
									"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
								task_tag: "matrices",
								completed: true,
								status_level: 4,
								start_date: "2021-01-31T14:09:12Z",
								end_date: "2021-08-26T15:51:47Z",
							},
						],
					},
				],
			},
			{
				id: "71eb1285-85ed-41b4-8c3d-c1235213d1d5",
				project_title: "Hatity",
				project_description:
					"Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
				sub_categories: [
					{
						id: "eb8c1ba4-346a-4fd9-818a-59f88df0bf04",
						sub_category_title: "Engineering",
						tasks: [
							{
								id: "8e48261c-a729-4d8c-8b55-dd43d117248e",
								task_title: "vulputate elementum nullam varius",
								task_description:
									"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
								task_tag: "Monitored",
								completed: true,
								status_level: 2,
								start_date: "2021-02-15T08:40:10Z",
								end_date: "2022-02-13T07:19:44Z",
							},
						],
					},
					{
						id: "fa08e6f7-c5cf-438c-9d36-973ec364394c",
						sub_category_title: "Human Resources",
						tasks: [
							{
								id: "6544f80d-d628-43d3-a4d7-c1b8bb0b4c64",
								task_title: "consectetuer eget rutrum at lorem",
								task_description:
									"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
								task_tag: "foreground",
								completed: false,
								status_level: 0,
								start_date: "2021-02-14T18:13:54Z",
								end_date: "2022-01-18T01:08:02Z",
							},
							{
								id: "5201f400-78ef-4078-bceb-cb6886138f81",
								task_title: "lectus vestibulum quam",
								task_description:
									"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
								task_tag: "Cloned",
								completed: false,
								status_level: 2,
								start_date: "2021-01-05T21:16:18Z",
								end_date: "2021-11-22T07:02:01Z",
							},
							{
								id: "ec2693d9-2f4a-4bb5-90d2-06d1e285bb63",
								task_title: "volutpat convallis morbi",
								task_description:
									"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
								task_tag: "motivating",
								completed: false,
								status_level: 2,
								start_date: "2021-01-23T00:50:07Z",
								end_date: "2022-02-22T20:00:18Z",
							},
							{
								id: "facf1fd7-6783-467e-8367-70152394d17d",
								task_title: "aliquet ultrices erat",
								task_description:
									"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
								task_tag: "zero administration",
								completed: false,
								status_level: 4,
								start_date: "2021-01-16T03:24:04Z",
								end_date: "2022-04-30T23:52:32Z",
							},
						],
					},
					{
						id: "fd1f4bf7-7412-4138-aab3-71472a550e01",
						sub_category_title: "Support",
						tasks: [
							{
								id: "b06b900b-0e01-4348-a64c-542236912fed",
								task_title: "vel lectus in",
								task_description:
									"Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
								task_tag: "clear-thinking",
								completed: false,
								status_level: 4,
								start_date: "2021-02-10T23:28:08Z",
								end_date: "2022-04-25T19:59:12Z",
							},
						],
					},
					{
						id: "04554ed0-1112-4eba-83e1-2fa4f834b127",
						sub_category_title: "Training",
						tasks: [
							{
								id: "cf934cc7-d912-4662-8064-e44e7b38d247",
								task_title: "in lacus curabitur at",
								task_description:
									"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
								task_tag: "Mandatory",
								completed: true,
								status_level: 4,
								start_date: "2021-02-14T00:15:58Z",
								end_date: "2022-02-19T11:35:26Z",
							},
						],
					},
					{
						id: "c28bb0f7-a3eb-45f0-b72e-243edafd3d8f",
						sub_category_title: "Product Management",
						tasks: [
							{
								id: "46766378-694e-4efc-93a5-b8ec640d735c",
								task_title: "vitae consectetuer eget",
								task_description:
									"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
								task_tag: "encompassing",
								completed: true,
								status_level: 1,
								start_date: "2021-01-30T11:34:31Z",
								end_date: "2022-04-07T01:21:30Z",
							},
							{
								id: "16624eb2-44cb-4df3-9dfb-6dfbd49781c9",
								task_title: "lorem id ligula",
								task_description:
									"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
								task_tag: "Enterprise-wide",
								completed: false,
								status_level: 4,
								start_date: "2021-01-09T08:42:35Z",
								end_date: "2021-06-25T15:59:13Z",
							},
						],
					},
				],
			},
		],
	},
	{
		id: "64b9d0ec-ebe7-4da5-a9f4-061bd0ff12c9",
		color_code: "#23e74c",
		category_title: "Finance",
		projects: [
			{
				id: "e2792cd0-1c67-4245-91c4-8d13d47807cd",
				project_title: "Veribet",
				project_description:
					"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
				sub_categories: [
					{
						id: "7df37c55-6686-4d6c-b02c-b4c53fa7912e",
						sub_category_title: "Product Management",
						tasks: [
							{
								id: "1d0238a7-631c-4f35-9092-d59c9a6ed8de",
								task_title: "pede justo lacinia",
								task_description:
									"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
								task_tag: "didactic",
								completed: false,
								status_level: 1,
								start_date: "2021-01-24T10:05:04Z",
								end_date: "2021-04-20T13:16:09Z",
							},
							{
								id: "56f522f6-fef2-4730-94a7-21ffe1d431ef",
								task_title: "sit amet cursus id turpis",
								task_description:
									"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
								task_tag: "monitoring",
								completed: true,
								status_level: 3,
								start_date: "2021-01-13T12:33:18Z",
								end_date: "2022-01-08T14:27:03Z",
							},
							{
								id: "69a8d3a3-49ed-46a9-820d-bf3f4193c58c",
								task_title: "ut blandit non",
								task_description:
									"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
								task_tag: "Universal",
								completed: false,
								status_level: 0,
								start_date: "2021-01-19T04:13:29Z",
								end_date: "2021-10-20T21:41:30Z",
							},
						],
					},
					{
						id: "f5b13eb6-16ef-4ee9-8aa4-b4118aa3834c",
						sub_category_title: "Sales",
						tasks: [
							{
								id: "9d4a451b-12e2-418f-b189-e90d4e77ab49",
								task_title: "sed lacus morbi",
								task_description:
									"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
								task_tag: "Profit-focused",
								completed: true,
								status_level: 4,
								start_date: "2021-01-08T13:51:50Z",
								end_date: "2021-07-25T11:32:07Z",
							},
							{
								id: "d7b56acf-b869-4696-8cc1-64fb102da0bc",
								task_title: "blandit ultrices enim lorem",
								task_description:
									"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
								task_tag: "De-engineered",
								completed: true,
								status_level: 2,
								start_date: "2021-02-03T00:13:23Z",
								end_date: "2021-11-25T17:46:48Z",
							},
						],
					},
					{
						id: "c2a17339-c08f-4e1c-a82b-37e74b1e2f38",
						sub_category_title: "Engineering",
						tasks: [
							{
								id: "b48589c9-7c3a-4e09-807f-de6dcc36b3f0",
								task_title: "venenatis non sodales sed",
								task_description:
									"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
								task_tag: "multimedia",
								completed: false,
								status_level: 0,
								start_date: "2021-01-14T10:08:26Z",
								end_date: "2022-05-09T07:58:56Z",
							},
							{
								id: "751b4285-7f44-42b0-abba-d1636a5c5dad",
								task_title: "platea dictumst maecenas ut massa",
								task_description:
									"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
								task_tag: "user-facing",
								completed: false,
								status_level: 3,
								start_date: "2021-02-08T23:53:08Z",
								end_date: "2021-09-08T13:09:12Z",
							},
							{
								id: "5e1f5d81-2c2b-49cf-9dd1-ebaafc91b388",
								task_title: "lobortis sapien sapien",
								task_description:
									"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
								task_tag: "Re-contextualized",
								completed: true,
								status_level: 3,
								start_date: "2021-01-27T23:36:28Z",
								end_date: "2021-04-13T04:27:36Z",
							},
							{
								id: "8ea11dc1-e059-413e-bc4e-de50b4062e80",
								task_title: "eu est congue elementum in",
								task_description:
									"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
								task_tag: "Secured",
								completed: true,
								status_level: 2,
								start_date: "2021-02-13T05:52:09Z",
								end_date: "2022-03-24T00:03:07Z",
							},
							{
								id: "cf0bce7a-9383-40df-89ee-61a3e58dffdc",
								task_title: "mattis odio donec",
								task_description:
									"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
								task_tag: "reciprocal",
								completed: true,
								status_level: 3,
								start_date: "2021-02-10T14:28:32Z",
								end_date: "2022-05-20T12:33:18Z",
							},
						],
					},
					{
						id: "38894417-97a5-4ab1-9635-974d531a8376",
						sub_category_title: "Product Management",
						tasks: [
							{
								id: "c6a879ee-310a-4694-bb6a-10f7eb89c3e4",
								task_title: "a pede posuere nonummy integer",
								task_description:
									"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
								task_tag: "Vision-oriented",
								completed: false,
								status_level: 4,
								start_date: "2021-02-19T10:19:45Z",
								end_date: "2022-03-15T02:22:05Z",
							},
							{
								id: "82d277a5-62c3-4786-a39a-5cc81af0fc28",
								task_title: "a pede posuere nonummy integer",
								task_description:
									"Sed ante. Vivamus tortor. Duis mattis egestas metus.",
								task_tag: "Re-engineered",
								completed: true,
								status_level: 1,
								start_date: "2021-01-30T12:35:56Z",
								end_date: "2021-11-21T22:32:25Z",
							},
						],
					},
					{
						id: "7f6d851c-19c0-492c-8219-6d4a3e9169a2",
						sub_category_title: "Legal",
						tasks: [
							{
								id: "4a4efdf9-1a08-4805-9d96-bb6106326b41",
								task_title: "convallis nulla neque",
								task_description:
									"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
								task_tag: "high-level",
								completed: true,
								status_level: 4,
								start_date: "2021-02-09T19:55:29Z",
								end_date: "2021-06-14T13:42:57Z",
							},
							{
								id: "2f137902-4e95-421a-821d-bf98a2aa45ba",
								task_title: "fermentum justo nec",
								task_description:
									"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
								task_tag: "time-frame",
								completed: false,
								status_level: 3,
								start_date: "2021-01-25T21:21:23Z",
								end_date: "2021-11-03T15:47:11Z",
							},
							{
								id: "0c369059-00c8-4b70-854d-ef220cd54130",
								task_title: "ut blandit non interdum in",
								task_description:
									"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
								task_tag: "upward-trending",
								completed: false,
								status_level: 4,
								start_date: "2021-02-15T07:27:17Z",
								end_date: "2021-08-28T04:21:39Z",
							},
							{
								id: "1f8dc562-0d31-4255-9b58-ced39f257303",
								task_title: "eget eleifend luctus ultricies",
								task_description:
									"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
								task_tag: "Self-enabling",
								completed: true,
								status_level: 4,
								start_date: "2021-02-08T07:04:04Z",
								end_date: "2022-04-28T16:37:31Z",
							},
							{
								id: "5dd95430-050c-4d25-805b-8193aa945a75",
								task_title: "consequat nulla nisl nunc nisl",
								task_description:
									"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
								task_tag: "Advanced",
								completed: false,
								status_level: 0,
								start_date: "2021-02-17T04:58:58Z",
								end_date: "2022-05-19T19:31:23Z",
							},
							{
								id: "0e9a745f-5770-4036-9a0c-2fedb6e2ec35",
								task_title: "non pretium quis lectus suspendisse",
								task_description:
									"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
								task_tag: "Versatile",
								completed: true,
								status_level: 2,
								start_date: "2021-01-05T00:41:09Z",
								end_date: "2022-02-28T03:24:46Z",
							},
						],
					},
				],
			},
			{
				id: "e7851d4a-4435-4582-8534-0680a2b0aa6f",
				project_title: "Daltfresh",
				project_description:
					"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
				sub_categories: [
					{
						id: "ca721341-7ee8-4420-9bbe-4be14f3e3503",
						sub_category_title: "Marketing",
						tasks: [
							{
								id: "3d8c79f1-4eed-4cb8-8421-a4323acae1ce",
								task_title: "rhoncus mauris enim",
								task_description:
									"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
								task_tag: "superstructure",
								completed: false,
								status_level: 3,
								start_date: "2021-01-06T19:08:25Z",
								end_date: "2022-01-25T02:25:58Z",
							},
							{
								id: "7ce40340-5915-4188-b12c-f0dec1a3030f",
								task_title: "neque sapien placerat",
								task_description:
									"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
								task_tag: "Compatible",
								completed: false,
								status_level: 2,
								start_date: "2021-01-23T05:24:50Z",
								end_date: "2021-07-31T01:48:12Z",
							},
							{
								id: "f1f5c996-1e9c-4f28-aa8a-dac954b5a76a",
								task_title: "eu felis fusce",
								task_description:
									"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
								task_tag: "Universal",
								completed: false,
								status_level: 4,
								start_date: "2021-01-30T12:12:32Z",
								end_date: "2021-06-16T08:12:06Z",
							},
							{
								id: "97313032-8f93-4c17-b748-1a20ea3b6e8a",
								task_title: "maecenas rhoncus aliquam lacus morbi",
								task_description:
									"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
								task_tag: "didactic",
								completed: false,
								status_level: 0,
								start_date: "2021-01-02T07:13:27Z",
								end_date: "2021-03-16T20:29:16Z",
							},
							{
								id: "fd54c14f-cedd-46b8-b4b2-6b87b2287a6f",
								task_title: "neque libero convallis",
								task_description:
									"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
								task_tag: "mission-critical",
								completed: true,
								status_level: 4,
								start_date: "2021-01-14T04:49:24Z",
								end_date: "2021-07-09T18:42:21Z",
							},
							{
								id: "6a72fe5b-c7a9-4dcd-a354-ff6b7eb6a17e",
								task_title: "est et tempus semper est",
								task_description:
									"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
								task_tag: "dedicated",
								completed: true,
								status_level: 1,
								start_date: "2021-02-03T02:46:26Z",
								end_date: "2021-10-20T04:58:27Z",
							},
						],
					},
				],
			},
		],
	},
];
