export interface CampaignCreator {
  cloudFnc: string;
  queue: string;
  createCampaigns: () => {};
  createSingleCampaign: () => {}; // every single create campaign will have to do a look up
}
