import CampaignProcessor from '../../campaign-processor/campaign-processor';

/**
 * httpfunction with campaigns coming in from the front end
 * body should be an array of campaigns and each campaign should have a type on it
 * to determine what the factory makes down the chain of requests
 * @param req
 * @param res
 */
export default async function processCampaignsEntryPoint(req: any, res: any) {
  // validate request payload

  const campaignProcessor = new CampaignProcessor();

  const groupedCampaigns = campaignProcessor.groupCampaigns(req.body);

  await campaignProcessor.publishCampaigns(groupedCampaigns);
}
