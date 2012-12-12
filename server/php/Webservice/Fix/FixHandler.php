<?php
/**
 * kort - Webservice\Fix\FixHandler class
 */
namespace Webservice\Fix;

use Webservice\DbProxyHandler;
use Webservice\IKoinCount;
use Webservice\RewardHandler;
use Webservice\TransactionDbProxy;
use Model\Badge;
use Model\Reward;

/**
 * The FixHandler handles request to the fix webservice.
 */
class FixHandler extends DbProxyHandler implements IKoinCount
{
    /**
     * Returns the table used by this handler.
     *
     * @return string the table name used by this handler.
     */
    protected function getTable()
    {
        return 'kort.fix';
    }

    /**
     * Returns the table fields used by this handler.
     *
     * @return array the table fields used by this handler.
     */
    protected function getFields()
    {
        return array('user_id', 'error_id', 'schema', 'osm_id', 'message');
    }

    /**
     * Saves a fix in the database and gives the user a reward for this action.
     *
     * @param array $data The fix data.
     *
     * @return string|bool return the JSON-encoded reward for the user of successful, false otherwise
     */
    public function insertFix(array $data)
    {
        $transProxy = new TransactionDbProxy();
        $rewardHandler = new RewardHandler($transProxy, $this);

        $insertVoteParams = $this->insertParams($data);
        $transProxy->addToTransaction($insertVoteParams);
        $rewardHandler->applyRewards($data);

        $result = json_decode($transProxy->sendTransaction(), true);
        $reward = $rewardHandler->extractReward($result);
        return $reward->toJson();
    }

    /**
     * Returns the query to find the koinCount for votes.
     *
     * @param array $data The inserted data.
     *
     * @return string query to find the koinCount for votes
     */
    public function getKoinCountQuery(array $data)
    {
        $sql  = "select fix_koin_count from kort.error_koin_count ";
        $sql .= "where osm_id = " . $data['osm_id'] . " ";
        $sql .= "and schema = '" . $data['schema'] . "' ";
        $sql .= "and id = " . $data['error_id'];
        return $sql;
    }
}
