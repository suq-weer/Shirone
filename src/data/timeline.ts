/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
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
