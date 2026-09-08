/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "tmml",
		title: "Too Many Minecraft Launcher",
		summary: "Minecraft 启动器真的是太多了！所以我也做了个启动器~",
		category: "desktop",
		phase: "building",
		technologies: ["Tauri", "Vue.js"],
		icon: "simple-icons:tauri",
		repository: "https://github.com/suq-weer/tmml",
		year: "2026",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
