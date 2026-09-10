import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "初试编程",
		date: "2017",
		category: "milestone",
		subtitle: "我与编程的第一次邂逅",
		description:
			"在学习平板上第一次接触到了积木编程，写出了属于自己的第一个作品《多功能计算器》。",
		highlights: ["开始学习积木编程", "激活自己关于软件工程的创造力"],
		tags: ["Blockly", "Codemao"],
		icon: "material-symbols:power-plug",
		featured: true,
	},
	{
		title: "初中开始接触 Minecraft 基岩版 Addon 开发",
		date: "2021",
		category: "milestone",
		subtitle: "虽然只是写写数据驱动文件",
		description:
			"通过 JSON 文件与基岩版 Addon 模块交互，写出了很多自娱自乐的 Addon，后面游戏更新脚本引擎，学习了很多 Javascript 知识。",
		highlights: ["初学 JSON 语法"],
		tags: ["JSON", "Javascript"],
		icon: "at-icons:pickaxe",
		featured: false,
	},
	{
		title: "高中加入学校编程社团，正式进行团队协作与项目开发",
		date: "2024 - 2026",
		category: "life",
		subtitle: "在三个人的编程协作中，积累了不少知识",
		description:
			"在高中就有浓厚的编程开发兴趣，于是加入了学校新增的编程社团，成为学校编程社的第一届团员。",
		highlights: ["在团队里充当核心主力", "第一次接触软件开发的协作方式"],
		tags: ["团队协作"],
		icon: "bi:people-fill",
	},
	{
		title:
			"第一个团队协作竞赛作品《学校多媒体设备管理系统》荣获 2025 年粤港澳学生信息科技创新大赛二等奖",
		date: "2025",
		category: "project",
		subtitle: "在该项目中作主策划，独立开发设备被控端",
		description:
			"目前学校主流多媒体设备（如老式 Windows 台式机、希沃一体机等）配套的第一方软件生态，主要还是针对以本机为中心进行教学资源管理与其他课堂互动操作。而本系统可以实现私有的教学资源管理，也可以通过中心化的调配管理可以更好地让学校信息人员进行多媒体设备的机况评估与临时介入处理。",
		highlights: [
			"独立开发 Java 新版被控端",
			"独立开发 Python 旧版被控端",
			"协作开发 Vue.js 网页管理端",
		],
		tags: ["Java", "Vue.js", "Python"],
		icon: "material-symbols:rocket-launch-rounded",
		featured: true,
	},
	{
		title: "开始架设 Minecraft 服务器，与高中同学一起参与 Minecraft 建设",
		subtitle: "乡村振兴工作组服务器",
		date: "2024 - 2026",
		category: "life",
		description:
			"日常维护 Minecraft 服务器的过程中，逐渐学会了服务器基本运维知识。",
		highlights: ["初步学习服务器运维", "喜提“腐竹”称号"],
		icon: "boxicons:server-filled",
	},
	{
		title: "个人第一个播放量破万的视频在 Bilibili 发布",
		date: "2025.01.08",
		category: "milestone",
		subtitle:
			"《中低端手机玩 Java 版我的世界竟然能到 114 帧每秒？跟基岩版一样流畅！🤯『我的 FCL 优化笔记』》",
		description:
			"该视频运用了我所知的游戏知识编排而成，在 B 站有着不错的反响。",
		highlights: ["标志性的视频剪辑", "自媒体创作之路（虽然后面停更了）"],
		links: [
			{
				label: "原视频链接",
				url: "https://www.bilibili.com/video/BV17rreYMEdp",
				icon: "ix:bilibili-logo",
			},
		],
		tags: ["Bilibili", "自媒体"],
		icon: "ix:bilibili-logo",
		featured: true,
	},
	{
		title: "第一次尝试编写 Minecraft Java 模组",
		date: "2025",
		subtitle: "为了更费肝而制作的模组 More Liver",
		description: "学习 Java，在 Minecraft 1.21.1 上制作了 More Liver。",
		highlights: ["尝试学习 Java 的各种特性", "开始有模组产出能力"],
		tags: ["Neoforge", "Gradle", "Java"],
		category: "project",
		links: [
			{
				label: "Project Repository",
				url: "https://github.com/suq-weer/more-liver",
				icon: "fa6-brands:github",
			},
		],
	},
	{
		title: "Xiaosu's Blog 新版建站",
		date: "2026.09",
		category: "milestone",
		subtitle: "博客使用 Astro & Shirone",
		description: "wdf 这主题太好看了",
		highlights: [],
		tags: ["Astro", "Shirone", "M3E", "Blog"],
		links: [
			{
				label: "GitHub Repository",
				url: "https://github.com/suq-weer/Shirone",
				icon: "fa6-brands:github",
			},
		],
		icon: "material-symbols:rocket-launch-rounded",
		featured: true,
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
